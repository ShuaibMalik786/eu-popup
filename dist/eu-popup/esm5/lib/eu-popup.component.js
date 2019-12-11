/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { EuPopupInsertionDirective } from './eu-popup-insertion.directive';
import { DialogRef } from './dialog-ref';
import { DialogConfig } from './dialog-config';
var EuPopupComponent = /** @class */ (function () {
    function EuPopupComponent(componentFactoryResolver, cd, dialogRef, dialogConfig) {
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
    EuPopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    EuPopupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    EuPopupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    EuPopupComponent.prototype.onOverlayClicked = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        if (this.dialogConfig.dismissOnClickOutside || this.dialogConfig.dismissOnClickOutside == undefined) {
            this.dialogRef.close();
        }
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    EuPopupComponent.prototype.onDialogClicked = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.stopPropagation();
    };
    /**
     * @param {?} componentType
     * @return {?}
     */
    EuPopupComponent.prototype.loadChildComponent = /**
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        /** @type {?} */
        var viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    };
    EuPopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-eu-popup',
                    template: "<div class=\"eu-dialog-overlay\" (click)=\"onOverlayClicked($event)\">\r\n  <div class=\"dialog\" (click)=\"onDialogClicked($event)\">\r\n    <ng-template euPopupInsertion> </ng-template>\r\n  </div>\r\n</div>\r\n",
                    styles: [".eu-dialog-overlay{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.32);-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.eu-dialog-overlay .dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:.3125em;-webkit-animation:.2s pop;animation:.15s pop;padding:1.25em;border:none;background:#fff;font-family:inherit;font-size:1rem;max-width:100vw;width:26rem}@media only screen and (max-width:768px){.eu-dialog-overlay .dialog{max-width:80vw;min-width:80vw}}@-webkit-keyframes pop{0%{-webkit-transform:scale(.5,.5)}100%{-webkit-transform:scale(1,1)}}"]
                }] }
    ];
    /** @nocollapse */
    EuPopupComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: DialogRef },
        { type: DialogConfig }
    ]; };
    EuPopupComponent.propDecorators = {
        insertionPoint: [{ type: ViewChild, args: [EuPopupInsertionDirective, { read: false },] }]
    };
    return EuPopupComponent;
}());
export { EuPopupComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXUtcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXUtcG9wdXAvIiwic291cmNlcyI6WyJsaWIvZXUtcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQU1ULFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBZ0I3QywwQkFDVSwwQkFDQSxJQUNBLFdBQ0E7UUFIQSw2QkFBd0IsR0FBeEIsd0JBQXdCO1FBQ3hCLE9BQUUsR0FBRixFQUFFO1FBQ0YsY0FBUyxHQUFULFNBQVM7UUFDVCxpQkFBWSxHQUFaLFlBQVk7d0JBWk0sSUFBSSxPQUFPLEVBQU87dUJBSTdCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO0tBVTVDOzs7O0lBRUQsbUNBQVE7OztJQUFSO0tBQ0M7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0tBQ0Y7Ozs7O0lBRUQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLEdBQWU7UUFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLElBQUksU0FBUyxFQUFFO1lBQ25HLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDRjs7Ozs7SUFFRCwwQ0FBZTs7OztJQUFmLFVBQWdCLEdBQWU7UUFDN0IsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELDZDQUFrQjs7OztJQUFsQixVQUFtQixhQUF3Qjs7UUFDekMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7O1FBRTVGLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3hFOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixpT0FBd0M7O2lCQUV6Qzs7OztnQkFaQyx3QkFBd0I7Z0JBQ3hCLGlCQUFpQjtnQkFJVixTQUFTO2dCQUNULFlBQVk7OztpQ0FjbEIsU0FBUyxTQUFDLHlCQUF5QixFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7MkJBNUJ2RDs7U0FxQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVHlwZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBPbkluaXQsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFdVBvcHVwSW5zZXJ0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9ldS1wb3B1cC1pbnNlcnRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcclxuaW1wb3J0IHsgRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWV1LXBvcHVwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXUtcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2V1LXBvcHVwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEV1UG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBfb25DbG9zZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgcHVibGljIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XHJcbiAgcHVibGljIGNoaWxkQ29tcG9uZW50VHlwZTogVHlwZTxhbnk+O1xyXG4gIHB1YmxpYyBvbkNsb3NlID0gdGhpcy5fb25DbG9zZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgQFZpZXdDaGlsZChFdVBvcHVwSW5zZXJ0aW9uRGlyZWN0aXZlLCB7IHJlYWQ6IGZhbHNlIH0pIGluc2VydGlvblBvaW50OiBFdVBvcHVwSW5zZXJ0aW9uRGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBEaWFsb2dSZWYsXHJcbiAgICBwcml2YXRlIGRpYWxvZ0NvbmZpZzogRGlhbG9nQ29uZmlnLFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRDaGlsZENvbXBvbmVudCh0aGlzLmNoaWxkQ29tcG9uZW50VHlwZSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3ZlcmxheUNsaWNrZWQoZXZ0OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dDb25maWcuZGlzbWlzc09uQ2xpY2tPdXRzaWRlIHx8IHRoaXMuZGlhbG9nQ29uZmlnLmRpc21pc3NPbkNsaWNrT3V0c2lkZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGlhbG9nQ2xpY2tlZChldnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGxvYWRDaGlsZENvbXBvbmVudChjb21wb25lbnRUeXBlOiBUeXBlPGFueT4pIHtcclxuICAgIGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSk7XHJcblxyXG4gICAgbGV0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmluc2VydGlvblBvaW50LnZpZXdDb250YWluZXJSZWY7XHJcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuICB9XHJcbn1cclxuIl19