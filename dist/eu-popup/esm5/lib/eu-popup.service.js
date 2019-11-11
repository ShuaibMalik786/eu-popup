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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXUtcG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LXBvcHVwLyIsInNvdXJjZXMiOlsibGliL2V1LXBvcHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysd0JBQXdCLEVBQ3hCLGNBQWMsRUFDZCxRQUFRLEdBR1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7SUFTckMsd0JBQ1UsMEJBQ0EsUUFDQTtRQUZBLDZCQUF3QixHQUF4Qix3QkFBd0I7UUFDeEIsV0FBTSxHQUFOLE1BQU07UUFDTixhQUFRLEdBQVIsUUFBUTtLQUVqQjs7Ozs7SUFFTyxvREFBMkI7Ozs7Y0FBQyxNQUFvQjs7O1FBQ3RELElBQU0sR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7O1FBRzlCLElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7O1FBRzlCLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDOztZQUUxQyxBQURBLG1CQUFtQjtZQUNuQixLQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztZQUNyQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDOztRQUVILElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7O1FBQ2pHLElBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUU5QyxJQUFNLE9BQU8scUJBQUcsbUJBQUMsWUFBWSxDQUFDLFFBQWdDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFnQixFQUFDO1FBQzVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7UUFFdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2pELEtBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1NBQ3RDLENBQUMsQ0FBQzs7UUFHSCxPQUFPLFNBQVMsQ0FBQzs7Ozs7SUFHWCxzREFBNkI7Ozs7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7SUFHN0IsOEJBQUs7Ozs7UUFDVixJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQzs7Ozs7O0lBR2hDLDZCQUFJOzs7O2NBQUMsTUFBb0I7O1FBQzlCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDO1FBQzVFLE9BQU8sU0FBUyxDQUFDOzs7Z0JBM0RwQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWRDLHdCQUF3QjtnQkFDeEIsY0FBYztnQkFDZCxRQUFROzs7eUJBSlY7O1NBaUJhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBJbmplY3RvcixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBDb21wb25lbnRSZWYsIFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFdVBvcHVwQ29tcG9uZW50fSBmcm9tICcuL2V1LXBvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQge0V1UG9wdXBJbm5lckNvbXBvbmVudH0gZnJvbSAnLi9wb3VwSW5uZXIvcG9wdXBJbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWFsb2dDb25maWd9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XG5pbXBvcnQge0RpYWxvZ0luamVjdG9yfSBmcm9tICcuL2RpYWxvZy1pbmplY3Rvcic7XG5pbXBvcnQge0RpYWxvZ1JlZn0gZnJvbSAnLi9kaWFsb2ctcmVmJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pIFxuZXhwb3J0IGNsYXNzIEV1UG9wdXBTZXJ2aWNlIHtcblxuICBkaWFsb2dDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxFdVBvcHVwQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kRGlhbG9nQ29tcG9uZW50VG9Cb2R5KGNvbmZpZzogRGlhbG9nQ29uZmlnKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICBtYXAuc2V0KERpYWxvZ0NvbmZpZywgY29uZmlnKTtcblxuICAgIC8vIGFkZCB0aGUgRGlhbG9nUmVmIHRvIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4gICAgY29uc3QgZGlhbG9nUmVmID0gbmV3IERpYWxvZ1JlZigpO1xuICAgIG1hcC5zZXQoRGlhbG9nUmVmLCBkaWFsb2dSZWYpO1xuXG4gICAgLy8gd2Ugd2FudCB0byBrbm93IHdoZW4gc29tZWJvZHkgY2FsbGVkIHRoZSBjbG9zZSBtZWh0b2RcbiAgICBjb25zdCBzdWIgPSBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vIGNsb3NlIHRoZSBkaWFsb2dcbiAgICAgIHRoaXMucmVtb3ZlRGlhbG9nQ29tcG9uZW50RnJvbUJvZHkoKTtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEV1UG9wdXBDb21wb25lbnQpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKG5ldyBEaWFsb2dJbmplY3Rvcih0aGlzLmluamVjdG9yLCBtYXApKTtcblxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21FbGVtKTtcblxuICAgIHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXG4gICAgdGhpcy5kaWFsb2dDb21wb25lbnRSZWYuaW5zdGFuY2Uub25DbG9zZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVEaWFsb2dDb21wb25lbnRGcm9tQm9keSgpO1xuICAgIH0pO1xuXG4gICAgLy8gcmV0dXJuIHRoZSBkaWFsb2dSZWZcbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEaWFsb2dDb21wb25lbnRGcm9tQm9keSgpIHtcbiAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgdGhpcy5yZW1vdmVEaWFsb2dDb21wb25lbnRGcm9tQm9keSgpOyBcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKGNvbmZpZzogRGlhbG9nQ29uZmlnKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5hcHBlbmREaWFsb2dDb21wb25lbnRUb0JvZHkoY29uZmlnKTtcbiAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZi5pbnN0YW5jZS5jaGlsZENvbXBvbmVudFR5cGUgPSBFdVBvcHVwSW5uZXJDb21wb25lbnQ7XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG59XG4iXX0=