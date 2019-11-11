import {
  Component,
  Type,
  OnDestroy,
  AfterViewInit,
  OnInit,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  ChangeDetectorRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { EuPopupInsertionDirective } from './eu-popup-insertion.directive';
import { DialogRef } from './dialog-ref';
import { DialogConfig } from './dialog-config';

@Component({
  selector: 'lib-eu-popup',
  templateUrl: './eu-popup.component.html',
  styleUrls: ['./eu-popup.component.scss']
})
export class EuPopupComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly _onClose = new Subject<any>();

  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;
  public onClose = this._onClose.asObservable();

  @ViewChild(EuPopupInsertionDirective, { read: false }) insertionPoint: EuPopupInsertionDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef,
    private dialogConfig: DialogConfig,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    if (this.dialogConfig.dismissOnClickOutside || this.dialogConfig.dismissOnClickOutside == undefined) {
      this.dialogRef.close();
    }
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
