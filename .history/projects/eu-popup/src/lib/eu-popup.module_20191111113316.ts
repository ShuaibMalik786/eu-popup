import {NgModule} from '@angular/core';
import {EuPopupComponent} from './eu-popup.component';
import {EuPopupInsertionDirective} from './eu-popup-insertion.directive';
import {EuPopupInnerComponent} from './poupInner/popupInner.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [EuPopupComponent, EuPopupInsertionDirective, EuPopupInnerComponent],
  imports: [CommonModule, BrowserModule],
  exports: [EuPopupComponent, EuPopupInsertionDirective, EuPopupInnerComponent],
  entryComponents: [EuPopupComponent, EuPopupInnerComponent],
})
export class EuPopupModule {
}
