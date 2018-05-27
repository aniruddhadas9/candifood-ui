import {Component, Input, OnInit} from '@angular/core';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebook, faGooglePlus, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

import {faUser, faHome, faFax, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'cfs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() social: {
    facebook: string,
    googlePlus: string,
    twitter: string,
    linkedin: string,
  };
  @Input() year: string;
  @Input() brand: {label: string, url: string};
  @Input() copyright: string;
  @Input() contact: {name: string, email: string, phone: string, fax: string};
  @Input() message: {heading: string, desc: string};
  @Input() columnOneLinks: Array<{label: string, url: string}>;
  @Input() columnTwoLinks: Array<{label: string, url: string}>;


  constructor() {
    library.add(faUser, faHome, faFax, faPhone, faEnvelope, faTwitter, faFacebook, faGooglePlus, faLinkedin);
  }

  ngOnInit() {
  }

}
