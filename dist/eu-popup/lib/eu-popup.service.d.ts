import { ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { EuPopupComponent } from './eu-popup.component';
import { DialogConfig } from './dialog-config';
import { DialogRef } from './dialog-ref';
export declare class EuPopupService {
    private componentFactoryResolver;
    private appRef;
    private injector;
    dialogComponentRef: ComponentRef<EuPopupComponent>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    private appendDialogComponentToBody;
    private removeDialogComponentFromBody;
    close(): void;
    open(config: DialogConfig): DialogRef;
}
