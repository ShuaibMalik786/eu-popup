import { Type, OnDestroy, AfterViewInit, OnInit, ComponentRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { EuPopupInsertionDirective } from './eu-popup-insertion.directive';
import { DialogRef } from './dialog-ref';
import { DialogConfig } from './dialog-config';
export declare class EuPopupComponent implements OnInit, AfterViewInit, OnDestroy {
    private componentFactoryResolver;
    private cd;
    private dialogRef;
    private dialogConfig;
    private readonly _onClose;
    componentRef: ComponentRef<any>;
    childComponentType: Type<any>;
    onClose: import("rxjs").Observable<any>;
    insertionPoint: EuPopupInsertionDirective;
    constructor(componentFactoryResolver: ComponentFactoryResolver, cd: ChangeDetectorRef, dialogRef: DialogRef, dialogConfig: DialogConfig);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onOverlayClicked(evt: MouseEvent): void;
    onDialogClicked(evt: MouseEvent): void;
    loadChildComponent(componentType: Type<any>): void;
}
