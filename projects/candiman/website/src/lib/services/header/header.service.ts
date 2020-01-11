import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export interface Link {
  label: string;
  url: string;
  access?: Array<string>;
}

export interface Logo {
  imageInAsset: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
  style?: Object | any;
}

export interface MiddleButton {
  display: boolean;
  label: string;
  loading: boolean;
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
  middleButton?: MiddleButton;
  style?: Object | any;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  header: Subject<Header> = new Subject<Header>();
  leftLinks: Subject<Array<Link>> = new Subject<Array<Link>>();
  rightLinks: Subject<Array<Link>> = new Subject<Array<Link>>();
  middleButton: Subject<MiddleButton> = new Subject<MiddleButton>();
  logo: Subject<Logo> = new Subject<Logo>();
  brand: Subject<Brand> = new Subject<Brand>();


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
          {label: 'Profile', url: '/profile', access: []},
          {label: 'login', url: '/login', access: []},
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


  changeLinkText(oldText: string, newText: string) {

  }
}
