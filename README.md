## eu-popup

Pop up service for Angular

## Demo
[Demo link](http://elastic-style.herokuapp.com/eu-popup)

## Getting started

Import `EuPopupModule` in app.module.ts - 
```
import {EuPopupModule} from 'eu-popup';
```

Add it in 'imports' - 
```
  imports: [
    EuPopupModule,
    ...
  ],
  ```

Import 'EuPopupService' in your component - 
```
import {EuPopupService} from 'eu-popup';
```

Inject service in component
```
  constructor(private euPopupService: EuPopupService) {
  }
```

Open popup by calling the service - 
```
      this.euPopupService.open({
          type: 'error',
          title: 'OOPS',
          text: 'I am a dynamic component inside of a dialog!',
          showCancelButton: true,
          cancelButtonText: 'No, cancel!',
          confirmButtonText: 'yes',
          dismissOnClickOutside: false,
          
        }
      ).afterClosed.subscribe(result => {
        console.log(result);
      });
```

# Options

| Option                |  Type   |  Default  |                        Values |
|-----------------------|:-------:|:---------:|------------------------------:|
| type                  | string  | undefined | error, success, warning, info |
| title                 | string  | undefined |                    any string |
| text                  | string  | undefined |                    any string |
| cancelButtonText      | string  | undefined |                    any string |
| confirmButtonText     | string  | undefined |                    any string |
| dismissOnClickOutside | boolean |   false   |                 true or false |
| showCancelButton      | boolean |   false   |                 true or false |
| showOkButton          | boolean |   false   |                 true or false |


