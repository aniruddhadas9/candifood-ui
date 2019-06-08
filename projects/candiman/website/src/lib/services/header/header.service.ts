import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Link {
  label: string;
  url: string;
  hidden: boolean;
}

export interface Logo {
  imageInAsset: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
  style?: Object | any;
}

export interface Brand {
  label: string;
  url: string;
  logo: Logo;
  style?: Object | any;
}

export interface Header {
  brand: Brand;
  links: {
    leftLinks: Array<Link>;
    rightLinks: Array<Link>;
    style?: Object | any;
  };
  middleButton?: {
    display: boolean;
    label: string;
    loading: boolean;
    style?: Object | any;
  };
  style?: Object | any;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  header: BehaviorSubject<Header> = new BehaviorSubject<any>(null);


  constructor() {
    this.header.next({
      brand: {
        label: 'candifood',
        url: '/',
        logo: {
          imageInAsset: 'candilogo_icon32x32.png',
          style: {
            width: '30px',
            height: '30px'
          }
        },
        style: {
          'color': '#ffe90f',
          'text-decoration': 'none'
        }
      },
      links: {
        rightLinks: [
          {label: 'Profile', url: '/profile', hidden: true},
          {label: 'login', url: '/login', hidden: false},
        ],
        leftLinks: null,
        style: {
          'background-color': '#ec7a39',
          'color': '#f6f6f6',
          'text-decoration': 'none',
          'a:link': {
            'color': '#3eff77'
          },
          'a:visited': {
            'color': '#ff9d19'
          },
          'a:hover': {
            'color': '#fe4d0e'
          },
          'a:active': {
            'color': '#ec7a39'
          }
        }
      },
      middleButton: {
        display: true,
        label: 'Trying to get location from device...',
        loading: true,
        style: {
          'background-color': '#ec9a0a',
          'color': '#ffffff'
        }
      },
      style: {
        'background-color': '#ec7a39'
      }
    });
  }

  setLogo() {

  }

  setBrand() {

  }

  setLeftLink() {
  }

  setRightLink() {
  }

  setHeader() {

  }
}
