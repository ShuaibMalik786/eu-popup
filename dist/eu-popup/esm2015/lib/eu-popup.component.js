/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { EuPopupInsertionDirective } from './eu-popup-insertion.directive';
import { DialogRef } from './dialog-ref';
import { DialogConfig } from './dialog-config';
export class EuPopupComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} cd
     * @param {?} dialogRef
     * @param {?} dialogConfig
     */
    constructor(componentFactoryResolver, cd, dialogRef, dialogConfig) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.dialogRef = dialogRef;
        this.dialogConfig = dialogConfig;
        this._onClose = new Subject();
        this.onClose = this._onClose.asObservable();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onOverlayClicked(evt) {
        if (this.dialogConfig.dismissOnClickOutside || this.dialogConfig.dismissOnClickOutside == undefined) {
            this.dialogRef.close();
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDialogClicked(evt) {
        evt.stopPropagation();
    }
    /**
     * @param {?} componentType
     * @return {?}
     */
    loadChildComponent(componentType) {
        /** @type {?} */
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        /** @type {?} */
        let viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }
}
EuPopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-eu-popup',
                template: "<div class=\"eu-dialog-overlay\" (click)=\"onOverlayClicked($event)\">\r\n  <div class=\"dialog\" (click)=\"onDialogClicked($event)\">\r\n    <ng-template euPopupInsertion> </ng-template>\r\n  </div>\r\n</div>\r\n",
                styles: [".eu-dialog-overlay{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.32);-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.eu-dialog-overlay .dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:.3125em;-webkit-animation:.2s pop;animation:.15s pop;padding:1.25em;border:none;background:#fff;font-family:inherit;font-size:1rem;max-width:100vw;width:26rem}@media only screen and (max-width:768px){.eu-dialog-overlay .dialog{max-width:80vw;min-width:80vw}}@-webkit-keyframes pop{1%{-webkit-transform:scale(.5,.5)}100%{-webkit-transform:scale(1,1)}}"]
            }] }
];
/** @nocollapse */
EuPopupComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: DialogRef },
    { type: DialogConfig }
];
EuPopupComponent.propDecorators = {
    insertionPoint: [{ type: ViewChild, args: [EuPopupInsertionDirective, { read: false },] }]
};
if (false) {
    /** @type {?} */
    EuPopupComponent.prototype._onClose;
    /** @type {?} */
    EuPopupComponent.prototype.componentRef;
    /** @type {?} */
    EuPopupComponent.prototype.childComponentType;
    /** @type {?} */
    EuPopupComponent.prototype.onClose;
    /** @type {?} */
    EuPopupComponent.prototype.insertionPoint;
    /** @type {?} */
    EuPopupComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    EuPopupComponent.prototype.cd;
    /** @type {?} */
    EuPopupComponent.prototype.dialogRef;
    /** @type {?} */
    EuPopupComponent.prototype.dialogConfig;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXUtcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXUtcG9wdXAvIiwic291cmNlcyI6WyJsaWIvZXUtcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQU1ULFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsTUFBTTs7Ozs7OztJQVNKLFlBQ1UsMEJBQ0EsSUFDQSxXQUNBO1FBSEEsNkJBQXdCLEdBQXhCLHdCQUF3QjtRQUN4QixPQUFFLEdBQUYsRUFBRTtRQUNGLGNBQVMsR0FBVCxTQUFTO1FBQ1QsaUJBQVksR0FBWixZQUFZO3dCQVpNLElBQUksT0FBTyxFQUFPO3VCQUk3QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtLQVU1Qzs7OztJQUVELFFBQVE7S0FDUDs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtLQUNGOzs7OztJQUVELGdCQUFnQixDQUFDLEdBQWU7UUFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLElBQUksU0FBUyxFQUFFO1lBQ25HLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDRjs7Ozs7SUFFRCxlQUFlLENBQUMsR0FBZTtRQUM3QixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDdkI7Ozs7O0lBRUQsa0JBQWtCLENBQUMsYUFBd0I7O1FBQ3pDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxDQUFDOztRQUU1RixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7UUFDNUQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUN4RTs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsaU9BQXdDOzthQUV6Qzs7OztZQVpDLHdCQUF3QjtZQUN4QixpQkFBaUI7WUFJVixTQUFTO1lBQ1QsWUFBWTs7OzZCQWNsQixTQUFTLFNBQUMseUJBQXlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uSW5pdCxcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFdVBvcHVwSW5zZXJ0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9ldS1wb3B1cC1pbnNlcnRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IERpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XG5pbXBvcnQgeyBEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZXUtcG9wdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXUtcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ldS1wb3B1cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV1UG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX29uQ2xvc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgcHVibGljIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHB1YmxpYyBjaGlsZENvbXBvbmVudFR5cGU6IFR5cGU8YW55PjtcbiAgcHVibGljIG9uQ2xvc2UgPSB0aGlzLl9vbkNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIEBWaWV3Q2hpbGQoRXVQb3B1cEluc2VydGlvbkRpcmVjdGl2ZSwgeyByZWFkOiBmYWxzZSB9KSBpbnNlcnRpb25Qb2ludDogRXVQb3B1cEluc2VydGlvbkRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBEaWFsb2dSZWYsXG4gICAgcHJpdmF0ZSBkaWFsb2dDb25maWc6IERpYWxvZ0NvbmZpZyxcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmxvYWRDaGlsZENvbXBvbmVudCh0aGlzLmNoaWxkQ29tcG9uZW50VHlwZSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBvbk92ZXJsYXlDbGlja2VkKGV2dDogTW91c2VFdmVudCkge1xuICAgIGlmICh0aGlzLmRpYWxvZ0NvbmZpZy5kaXNtaXNzT25DbGlja091dHNpZGUgfHwgdGhpcy5kaWFsb2dDb25maWcuZGlzbWlzc09uQ2xpY2tPdXRzaWRlID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvbkRpYWxvZ0NsaWNrZWQoZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgbG9hZENoaWxkQ29tcG9uZW50KGNvbXBvbmVudFR5cGU6IFR5cGU8YW55Pikge1xuICAgIGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XG5cbiAgICBsZXQgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMuaW5zZXJ0aW9uUG9pbnQudmlld0NvbnRhaW5lclJlZjtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICB9XG59XG4iXX0=