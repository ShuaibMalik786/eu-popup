import { Component, OnInit } from '@angular/core';
import { EuPopupService } from 'eu-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'elastic-ui';

  constructor(private euPopupService: EuPopupService) {
  }

  ngOnInit() {
    this.open();
  }

  open() {
    this.euPopupService.open({
      type: 'error',
      title: 'OOPS',
      text: 'I am a dynamic component inside of a dialog!',
      showCancelButton: true,
      // cancelButtonText: 'No',
      // confirmButtonText: 'Yes',
      // confirmButtonBgColor: 'purple',
      // cancelButtonBgColor: 'purple',
      // confirmButtonTextColor: 'white',
      // cancelButtonTextColor: 'white',
      // dismissOnClickOutside: false,

    }
    ).afterClosed.subscribe(result => {
      console.log(result);
    });
  }
}
