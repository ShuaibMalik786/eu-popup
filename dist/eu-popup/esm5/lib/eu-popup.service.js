/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, } from '@angular/core';
import { EuPopupComponent } from './eu-popup.component';
import { EuPopupInnerComponent } from './poupInner/popupInner.component';
import { DialogConfig } from './dialog-config';
import { DialogInjector } from './dialog-injector';
import { DialogRef } from './dialog-ref';
import * as i0 from "@angular/core";
var EuPopupService = /** @class */ (function () {
    function EuPopupService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    EuPopupService.prototype.appendDialogComponentToBody = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        /** @type {?} */
        var map = new WeakMap();
        map.set(DialogConfig, config);
        /** @type {?} */
        var dialogRef = new DialogRef();
        map.set(DialogRef, dialogRef);
        /** @type {?} */
        var sub = dialogRef.afterClosed.subscribe(function () {
            // close the dialog
            // close the dialog
            _this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(EuPopupComponent);
        /** @type {?} */
        var componentRef = componentFactory.create(new DialogInjector(this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        this.dialogComponentRef.instance.onClose.subscribe(function () {
            _this.removeDialogComponentFromBody();
        });
        // return the dialogRef
        return dialogRef;
    };
    /**
     * @return {?}
     */
    EuPopupService.prototype.removeDialogComponentFromBody = /**
     * @return {?}
     */
    function () {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    };
    /**
     * @return {?}
     */
    EuPopupService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removeDialogComponentFromBody();
    };
    /**
     * @param {?} config
     * @return {?}
     */
    EuPopupService.prototype.open = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = EuPopupInnerComponent;
        return dialogRef;
    };
    EuPopupService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EuPopupService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    /** @nocollapse */ EuPopupService.ngInjectableDef = i0.defineInjectable({ factory: function EuPopupService_Factory() { return new EuPopupService(i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR)); }, token: EuPopupService, providedIn: "root" });
    return EuPopupService;
}());
export { EuPopupService };
if (false) {
    /** @type {?} */
    EuPopupService.prototype.dialogComponentRef;
    /** @type {?} */
    EuPopupService.prototype.componentFactoryResolver;
    /** @type {?} */
    EuPopupService.prototype.appRef;
    /** @type {?} */
    EuPopupService.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXUtcG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LXBvcHVwLyIsInNvdXJjZXMiOlsibGliL2V1LXBvcHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysd0JBQXdCLEVBQ3hCLGNBQWMsRUFDZCxRQUFRLEdBR1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7SUFTckMsd0JBQ1UsMEJBQ0EsUUFDQTtRQUZBLDZCQUF3QixHQUF4Qix3QkFBd0I7UUFDeEIsV0FBTSxHQUFOLE1BQU07UUFDTixhQUFRLEdBQVIsUUFBUTtLQUVqQjs7Ozs7SUFFTyxvREFBMkI7Ozs7Y0FBQyxNQUFvQjs7O1FBQ3RELElBQU0sR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7O1FBRzlCLElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7O1FBRzlCLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDOztZQUUxQyxBQURBLG1CQUFtQjtZQUNuQixLQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztZQUNyQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDOztRQUVILElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7O1FBQ2pHLElBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUU5QyxJQUFNLE9BQU8scUJBQUcsbUJBQUMsWUFBWSxDQUFDLFFBQWdDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFnQixFQUFDO1FBQzVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7UUFFdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2pELEtBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1NBQ3RDLENBQUMsQ0FBQzs7UUFHSCxPQUFPLFNBQVMsQ0FBQzs7Ozs7SUFHWCxzREFBNkI7Ozs7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7SUFHN0IsOEJBQUs7Ozs7UUFDVixJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQzs7Ozs7O0lBR2hDLDZCQUFJOzs7O2NBQUMsTUFBb0I7O1FBQzlCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDO1FBQzVFLE9BQU8sU0FBUyxDQUFDOzs7Z0JBM0RwQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWRDLHdCQUF3QjtnQkFDeEIsY0FBYztnQkFDZCxRQUFROzs7eUJBSlY7O1NBaUJhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEluamVjdGFibGUsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBDb21wb25lbnRSZWYsIFR5cGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RXVQb3B1cENvbXBvbmVudH0gZnJvbSAnLi9ldS1wb3B1cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V1UG9wdXBJbm5lckNvbXBvbmVudH0gZnJvbSAnLi9wb3VwSW5uZXIvcG9wdXBJbm5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RpYWxvZ0NvbmZpZ30gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcclxuaW1wb3J0IHtEaWFsb2dJbmplY3Rvcn0gZnJvbSAnLi9kaWFsb2ctaW5qZWN0b3InO1xyXG5pbXBvcnQge0RpYWxvZ1JlZn0gZnJvbSAnLi9kaWFsb2ctcmVmJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSkgXHJcbmV4cG9ydCBjbGFzcyBFdVBvcHVwU2VydmljZSB7XHJcblxyXG4gIGRpYWxvZ0NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEV1UG9wdXBDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBlbmREaWFsb2dDb21wb25lbnRUb0JvZHkoY29uZmlnOiBEaWFsb2dDb25maWcpIHtcclxuICAgIGNvbnN0IG1hcCA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBtYXAuc2V0KERpYWxvZ0NvbmZpZywgY29uZmlnKTtcclxuXHJcbiAgICAvLyBhZGQgdGhlIERpYWxvZ1JlZiB0byBkZXBlbmRlbmN5IGluamVjdGlvblxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gbmV3IERpYWxvZ1JlZigpO1xyXG4gICAgbWFwLnNldChEaWFsb2dSZWYsIGRpYWxvZ1JlZik7XHJcblxyXG4gICAgLy8gd2Ugd2FudCB0byBrbm93IHdoZW4gc29tZWJvZHkgY2FsbGVkIHRoZSBjbG9zZSBtZWh0b2RcclxuICAgIGNvbnN0IHN1YiA9IGRpYWxvZ1JlZi5hZnRlckNsb3NlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyBjbG9zZSB0aGUgZGlhbG9nXHJcbiAgICAgIHRoaXMucmVtb3ZlRGlhbG9nQ29tcG9uZW50RnJvbUJvZHkoKTtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRXVQb3B1cENvbXBvbmVudCk7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZShuZXcgRGlhbG9nSW5qZWN0b3IodGhpcy5pbmplY3RvciwgbWFwKSk7XHJcblxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmLmluc3RhbmNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVEaWFsb2dDb21wb25lbnRGcm9tQm9keSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoZSBkaWFsb2dSZWZcclxuICAgIHJldHVybiBkaWFsb2dSZWY7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZURpYWxvZ0NvbXBvbmVudEZyb21Cb2R5KCkge1xyXG4gICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnJlbW92ZURpYWxvZ0NvbXBvbmVudEZyb21Cb2R5KCk7IFxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW4oY29uZmlnOiBEaWFsb2dDb25maWcpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuYXBwZW5kRGlhbG9nQ29tcG9uZW50VG9Cb2R5KGNvbmZpZyk7XHJcbiAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZi5pbnN0YW5jZS5jaGlsZENvbXBvbmVudFR5cGUgPSBFdVBvcHVwSW5uZXJDb21wb25lbnQ7XHJcbiAgICByZXR1cm4gZGlhbG9nUmVmO1xyXG4gIH1cclxuXHJcbn1cclxuIl19