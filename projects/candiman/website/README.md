# @candiman/website

This module hold a lot of helper library which can build a website in 

If you want to use all the services available, you need to import this module as forRoot as below

```
CoreModule.forRoot(),
```

##### Dependencies

Below are the dependencies the core module depends on.

```
@angular/elements
@fortawesome/angular-fontawesome
@fortawesome/fontawesome-svg-core
@fortawesome/free-brands-svg-icons
@fortawesome/free-solid-svg-icons
bootstrap
@ng-bootstrap/ng-bootstrap

```

##### Other dependencies

Install below dependencies for style and icons to see the design. We use bootstop for style and fontawesone icons to show beautiful icons.

#### Header

To make a website header, you need to foolow below steps

```html
<cfs-header
  [middleButton]="middleButton"
  [header]="header"
  (middleButtonClick)="openLocationChangeModel($event)">
</cfs-header>

```

Add a header object to your app component with header configuration.

```javascript
this.header = {
      brand: {
        label: 'xxxxx',
        url: '/',
        logo: {
          imageInAsset: 'xxxx.png',
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
          {label: 'Profile', url: '/profile', display: true},
        ],
        leftLinks: null,
        style: {
          'background-color': '#367aec',
          'color': '#ec8559',
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
          'color': '#ec0b26'
        }
      },
      style: {
        'background-color': '#367aec'
      }
    };
```

##### Footer

Same way you can make your website footer in just few configuration change.

```html
<cfs-footer
  [footer]="footer">
</cfs-footer>

```

the configuration of the footer need to be in the `app.component.ts`

```typescript
    this.footer = {
      displayTopSection: true,
      social: {
        facebook: 'http://www.facebook.com',
        googlePlus: 'http://www.plus.google.com',
        twitter: 'http://www.twitter.com',
        linkedIn: 'http://www.linkedin.com',
      },
      copyright: {
        year: 2018,
        label: 'company team',
        url: 'https://www.somesite.com'
      },
      contact: {
        name: 'Xxxxxxx Xxx',
        email: 'xxxxxxx@gmail.com',
        phone: '+1 xxx xxx xxxx',
        fax: '+x xxx xxx xxxx'
      },
      message: {
        heading: 'Business tag line',
        desc: 'description of the tag line'
      },
      columnOneLinks: [
        {label: 'login', url: '/login'},
        {label: 'Privacy', url: '/privacy'}
      ],
      columnTwoLinks: [
        {label: 'profile', url: '/profile'}
      ],
      style: {
        'background-color': '#7a690b',
        'color': '#f99d00',
        'a:link': {
          'color': '#ffc11a'
        },
        'a:visited': {
          'color': '#16d3ff'
        },
        'a:hover': {
          'color': '#fbfe11'
        },
        'a:active': {
          'color': '#d0eccb'
        }
      }
    };

```
