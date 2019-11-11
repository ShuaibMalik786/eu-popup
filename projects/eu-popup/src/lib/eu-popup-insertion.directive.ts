import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[euPopupInsertion]',
})
export class EuPopupInsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
