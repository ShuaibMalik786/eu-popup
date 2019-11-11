import {
  Component,
  OnInit,
} from '@angular/core';
import {DialogConfig} from '../dialog-config';
import {DialogRef} from '../dialog-ref';

@Component({
  selector: 'lib-eu-popupinner',
  templateUrl: './popupInner.component.html',
  styleUrls: ['./popupInner.component.scss']
})
export class EuPopupInnerComponent implements OnInit {
  constructor(public config: DialogConfig, public dialog: DialogRef) {
  }

  onCancel() {
    this.dialog.close(false);
  }

  onOk() {
    this.dialog.close(true);
  }

  ngOnInit() {
  }
}
