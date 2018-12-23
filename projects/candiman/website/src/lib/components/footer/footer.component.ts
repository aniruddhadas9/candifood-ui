import {Component, Input, OnInit} from '@angular/core';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebook, faGooglePlus, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

import {faUser, faHome, faFax, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';


export interface Footer {
  displayTopSection: boolean;
  social: {
    facebook: string,
    googlePlus: string,
    twitter: string,
    linkedIn: string,
  };
  copyright: {label: string, url: string, year: number};
  contact: {name: string, email: string, phone: string, fax: string};
  message: {heading: string, desc: string};
  columnOneLinks: Array<{label: string, url: string, hidden: boolean}>;
  columnTwoLinks: Array<{label: string, url: string, hidden: boolean}>;
  style?: Object | any;
}

@Component({
  selector: 'cfs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footer: Footer;

  constructor() {
    library.add(faUser, faHome, faFax, faPhone, faEnvelope, faTwitter, faFacebook, faGooglePlus, faLinkedin);
  }

  ngOnInit() {
  }

}
