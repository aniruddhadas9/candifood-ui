import {Component, Input, OnInit} from '@angular/core';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebook, faGooglePlus, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

import {faUser, faHome, faFax, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Footer, FooterService} from "../../services/footer/footer.service";



@Component({
  selector: 'cfs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footer: Footer;

  constructor(private footerService: FooterService) {
    library.add(faUser, faHome, faFax, faPhone, faEnvelope, faTwitter, faFacebook, faGooglePlus, faLinkedin);

    this.footerService.footer.subscribe((footer: Footer)=>{

    });
  }

  ngOnInit() {
  }

}
