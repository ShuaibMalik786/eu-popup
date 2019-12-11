import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef, Type,
} from '@angular/core';
import {EuPopupComponent} from './eu-popup.component';
import {EuPopupInnerComponent} from './poupInner/popupInner.component';
import {DialogConfig} from './dialog-config';
import {DialogInjector} from './dialog-injector';
import {DialogRef} from './dialog-ref';

@Injectable({
  providedIn: 'root'
}) 
export class EuPopupService {

  dialogComponentRef: ComponentRef<EuPopupComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
  }

  private appendDialogComponentToBody(config: DialogConfig) {
    const map = new WeakMap();
    map.set(DialogConfig, config);

    // add the DialogRef to dependency injection
    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    // we want to know when somebody called the close mehtod
    const sub = dialogRef.afterClosed.subscribe(() => {
      // close the dialog
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EuPopupComponent);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;

    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });

    // return the dialogRef
    return dialogRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public close() {
    this.removeDialogComponentFromBody(); 
  }

  public open(config: DialogConfig) {
    const dialogRef = this.appendDialogComponentToBody(config);
    this.dialogComponentRef.instance.childComponentType = EuPopupInnerComponent;
    return dialogRef;
  }

}
