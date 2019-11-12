import { Subject } from 'rxjs';
import { Directive, ViewContainerRef, Component, ViewChild, ComponentFactoryResolver, ChangeDetectorRef, Injectable, ApplicationRef, Injector, NgModule, defineInjectable, inject, INJECTOR } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EuPopupInsertionDirective = /** @class */ (function () {
    function EuPopupInsertionDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    EuPopupInsertionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[euPopupInsertion]',
                },] }
    ];
    /** @nocollapse */
    EuPopupInsertionDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return EuPopupInsertionDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogRef = /** @class */ (function () {
    function DialogRef() {
        this._afterClosed = new Subject();
        this.afterClosed = this._afterClosed.asObservable();
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    DialogRef.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this._afterClosed.next(result);
    };
    return DialogRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogConfig = /** @class */ (function () {
    function DialogConfig() {
        this.dismissOnClickOutside = true;
    }
    return DialogConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                    styles: [".eu-dialog-overlay{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.32);-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.eu-dialog-overlay .dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:.3125em;-webkit-animation:.2s pop;animation:.15s pop;padding:1.25em;border:none;background:#fff;font-family:inherit;font-size:1rem;max-width:100vw;width:26rem}@media only screen and (max-width:768px){.eu-dialog-overlay .dialog{max-width:80vw;min-width:80vw}}@-webkit-keyframes pop{1%{-webkit-transform:scale(.5,.5)}100%{-webkit-transform:scale(1,1)}}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EuPopupInnerComponent = /** @class */ (function () {
    function EuPopupInnerComponent(config, dialog) {
        this.config = config;
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    EuPopupInnerComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dialog.close(false);
    };
    /**
     * @return {?}
     */
    EuPopupInnerComponent.prototype.onOk = /**
     * @return {?}
     */
    function () {
        this.dialog.close(true);
    };
    /**
     * @return {?}
     */
    EuPopupInnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    EuPopupInnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-eu-popupinner',
                    template: "<div class=\"dialogContainer\">\r\n<div class=\"icon\" *ngIf=\"config?.type == 'error'\">\r\n <img alt=\"svgImg\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cmFkaWFsR3JhZGllbnQgaWQ9IklrVWg2ZXk1QmhuQ2h+aHJNczFmZGEiIGN4PSIzMi41IiBjeT0iMzEuNSIgcj0iMzAuNTE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhZmVlZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii4xOTMiIHN0b3AtY29sb3I9IiNiYmYxZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii43MDMiIHN0b3AtY29sb3I9IiNkN2Y4ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlMWZhZmYiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSWtVaDZleTVCaG5DaH5ock1zMWZkYSkiIGQ9Ik01OSwyMGgxLjVjMi4xNjgsMCwzLjg5Mi0xLjk5OCwzLjQyMi00LjI0M0M2My41OCwxNC4xMjIsNjIuMDU2LDEzLDYwLjM4NSwxM0w1MywxMyBjLTEuMTA1LDAtMi0wLjg5NS0yLTJjMC0xLjEwNSwwLjg5NS0yLDItMmgzLjM4NWMxLjY3LDAsMy4xOTUtMS4xMjIsMy41MzctMi43NTdDNjAuMzkyLDMuOTk4LDU4LjY2OCwyLDU2LjUsMkgzNC4wMDZIMzIuNWgtMjQgQzYuNTc1LDIsNSwzLjU3NSw1LDUuNVM2LjU3NSw5LDguNSw5SDEwYzEuMTA1LDAsMiwwLjg5NSwyLDJjMCwxLjEwNS0wLjg5NSwyLTIsMmwtNS4zODUsMGMtMS42NywwLTMuMTk1LDEuMTIyLTMuNTM3LDIuNzU3IEMwLjYwOCwxOC4wMDIsMi4zMzIsMjAsNC41LDIwSDE4djEyTDQuNjE1LDMyYy0xLjY3LDAtMy4xOTUsMS4xMjItMy41MzcsMi43NTdDMC42MDgsMzcuMDAyLDIuMzMyLDM5LDQuNSwzOUg1YzEuMTA1LDAsMiwwLjg5NSwyLDIgYzAsMS4xMDUtMC44OTUsMi0yLDJINC41Yy0yLjE2OCwwLTMuODkyLDEuOTk4LTMuNDIyLDQuMjQzQzEuNDIsNDguODc4LDIuOTQ1LDUwLDQuNjE1LDUwSDEwYzEuMTA1LDAsMiwwLjg5NSwyLDIgYzAsMS4xMDUtMC44OTUsMi0yLDJsLTEuMzg1LDBjLTEuNjcsMC0zLjE5NSwxLjEyMi0zLjUzNywyLjc1N0M0LjYwOCw1OS4wMDIsNi4zMzIsNjEsOC41LDYxaDIyLjQ5NEgzMi41aDIzIGMxLjkyNSwwLDMuNS0xLjU3NSwzLjUtMy41UzU3LjQyNSw1NCw1NS41LDU0SDU1Yy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMS4xMDUsMC44OTUtMiwyLTJoNC4zODVjMS42NywwLDMuMTk1LTEuMTIyLDMuNTM3LTIuNzU3IEM2My4zOTIsNDQuOTk4LDYxLjY2OCw0Myw1OS41LDQzSDQ3VjMxaDEyLjM4NWMxLjY3LDAsMy4xOTUtMS4xMjIsMy41MzctMi43NTdDNjMuMzkyLDI1Ljk5OCw2MS42NjgsMjQsNTkuNSwyNEg1OSBjLTEuMTA1LDAtMi0wLjg5NS0yLTJDNTcsMjAuODk1LDU3Ljg5NSwyMCw1OSwyMHoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9IklrVWg2ZXk1QmhuQ2h+aHJNczFmZGIiIHgxPSIzMiIgeDI9IjMyIiB5MT0iNTYiIHkyPSI2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjYzNGQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii4yMDQiIHN0b3AtY29sb3I9IiNmZTY0NjQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii41MjEiIHN0b3AtY29sb3I9IiNmYzY1ODEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii43OTQiIHN0b3AtY29sb3I9IiNmYTY2OTQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii45ODkiIHN0b3AtY29sb3I9IiNmYTY2OWEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYTY2OWEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjSWtVaDZleTVCaG5DaH5ock1zMWZkYikiIGQ9Ik01NywzMWMwLDEzLjgwNS0xMS4xOTUsMjUtMjUsMjVTNyw0NC44MDUsNywzMVMxOC4xOTUsNiwzMiw2UzU3LDE3LjE5NSw1NywzMXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDMuMjY4LDE5LjczMkw0My4yNjgsMTkuNzMyYzAuOTc2LDAuOTc2LDAuOTc2LDIuNTU5LDAsMy41MzVMMjQuMjY3LDQyLjI2OCBjLTAuOTc2LDAuOTc2LTIuNTU5LDAuOTc2LTMuNTM1LDBsMCwwYy0wLjk3Ni0wLjk3Ni0wLjk3Ni0yLjU1OSwwLTMuNTM1bDE5LjAwMS0xOS4wMDFDNDAuNzA5LDE4Ljc1Niw0Mi4yOTIsMTguNzU2LDQzLjI2OCwxOS43MzIgeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00My4yNjgsNDIuMjY4TDQzLjI2OCw0Mi4yNjhjLTAuOTc2LDAuOTc2LTIuNTU5LDAuOTc2LTMuNTM1LDBMMjAuNzMyLDIzLjI2NyBjLTAuOTc2LTAuOTc2LTAuOTc2LTIuNTU5LDAtMy41MzVsMCwwYzAuOTc2LTAuOTc2LDIuNTU5LTAuOTc2LDMuNTM1LDBsMTkuMDAxLDE5LjAwMUM0NC4yNDQsMzkuNzA5LDQ0LjI0NCw0MS4yOTIsNDMuMjY4LDQyLjI2OHoiPjwvcGF0aD48L3N2Zz4=\">\r\n</div>\r\n<div class=\"icon\" *ngIf=\"config?.type == 'success'\">\r\n  <img src=\"data:image/png;base64,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\">\r\n</div>\r\n<div class=\"icon\" *ngIf=\"config?.type == 'warning'\">\r\n  <img src=\"data:image/png;base64,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\">\r\n</div>\r\n<div class=\"icon\" *ngIf=\"config?.type == 'info'\">\r\n  <img alt=\"infoIcon\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cmFkaWFsR3JhZGllbnQgaWQ9IjdaalVBNkZMRFlzU19Hb0YxRzM4ZWEiIGN4PSIzMi41IiBjeT0iMzEuNSIgcj0iMzAuNTE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhZmVlZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii4xOTMiIHN0b3AtY29sb3I9IiNiYmYxZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii43MDMiIHN0b3AtY29sb3I9IiNkN2Y4ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlMWZhZmYiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjN1pqVUE2RkxEWXNTX0dvRjFHMzhlYSkiIGQ9Ik01OSwyMGgxLjVjMi4xNjgsMCwzLjg5Mi0xLjk5OCwzLjQyMi00LjI0M0M2My41OCwxNC4xMjIsNjIuMDU2LDEzLDYwLjM4NSwxM0w1MywxMyBjLTEuMTA1LDAtMi0wLjg5NS0yLTJjMC0xLjEwNSwwLjg5NS0yLDItMmgzLjM4NWMxLjY3LDAsMy4xOTUtMS4xMjIsMy41MzctMi43NTdDNjAuMzkyLDMuOTk4LDU4LjY2OCwyLDU2LjUsMkgzNC4wMDZIMzIuNWgtMjQgQzYuNTc1LDIsNSwzLjU3NSw1LDUuNVM2LjU3NSw5LDguNSw5SDEwYzEuMTA1LDAsMiwwLjg5NSwyLDJjMCwxLjEwNS0wLjg5NSwyLTIsMmwtNS4zODUsMGMtMS42NywwLTMuMTk1LDEuMTIyLTMuNTM3LDIuNzU3IEMwLjYwOCwxOC4wMDIsMi4zMzIsMjAsNC41LDIwSDE4djEyTDQuNjE1LDMyYy0xLjY3LDAtMy4xOTUsMS4xMjItMy41MzcsMi43NTdDMC42MDgsMzcuMDAyLDIuMzMyLDM5LDQuNSwzOUg1YzEuMTA1LDAsMiwwLjg5NSwyLDIgYzAsMS4xMDUtMC44OTUsMi0yLDJINC41Yy0yLjE2OCwwLTMuODkyLDEuOTk4LTMuNDIyLDQuMjQzQzEuNDIsNDguODc4LDIuOTQ1LDUwLDQuNjE1LDUwSDEwYzEuMTA1LDAsMiwwLjg5NSwyLDIgYzAsMS4xMDUtMC44OTUsMi0yLDJsLTEuMzg1LDBjLTEuNjcsMC0zLjE5NSwxLjEyMi0zLjUzNywyLjc1N0M0LjYwOCw1OS4wMDIsNi4zMzIsNjEsOC41LDYxaDIyLjQ5NEgzMi41aDIzIGMxLjkyNSwwLDMuNS0xLjU3NSwzLjUtMy41UzU3LjQyNSw1NCw1NS41LDU0SDU1Yy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMS4xMDUsMC44OTUtMiwyLTJoNC4zODVjMS42NywwLDMuMTk1LTEuMTIyLDMuNTM3LTIuNzU3IEM2My4zOTIsNDQuOTk4LDYxLjY2OCw0Myw1OS41LDQzSDQ3VjMxaDEyLjM4NWMxLjY3LDAsMy4xOTUtMS4xMjIsMy41MzctMi43NTdDNjMuMzkyLDI1Ljk5OCw2MS42NjgsMjQsNTkuNSwyNEg1OSBjLTEuMTA1LDAtMi0wLjg5NS0yLTJDNTcsMjAuODk1LDU3Ljg5NSwyMCw1OSwyMHoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9IjdaalVBNkZMRFlzU19Hb0YxRzM4ZWIiIHgxPSIzMiIgeDI9IjMyIiB5MT0iNjQuMDI1IiB5Mj0iMTQuMDI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxNTVjZGUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii4yNzgiIHN0b3AtY29sb3I9IiMxZjdmZTUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii41NjkiIHN0b3AtY29sb3I9IiMyNzljZWIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii44MiIgc3RvcC1jb2xvcj0iIzJjYWZlZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJlYjVmMCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCM3WmpVQTZGTERZc1NfR29GMUczOGViKSIgZD0iTTU3LDMxYzAsMTMuODA1LTExLjE5NSwyNS0yNSwyNVM3LDQ0LjgwNSw3LDMxUzE4LjE5NSw2LDMyLDZTNTcsMTcuMTk1LDU3LDMxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMSAyOGgyYzEuMTA1IDAgMiAuODk1IDIgMmwwIDExYzAgMS4xMDUtLjg5NSAyLTIgMmgtMmMtMS4xMDUgMC0yLS44OTUtMi0ybDAtMTFDMjkgMjguODk1IDI5Ljg5NSAyOCAzMSAyOHpNMzUgMjJjMCAxLjY1OC0xLjM0MiAzLTMgMy0xLjY1OCAwLTMtMS4zNDItMy0zczEuMzQyLTMgMy0zQzMzLjY1OCAxOSAzNSAyMC4zNDIgMzUgMjJ6Ij48L3BhdGg+PC9zdmc+\">\r\n</div>\r\n  \r\n  <div class=\"title\">{{config?.title}}</div>\r\n  <div class=\"text\">{{config?.text}}</div>\r\n  <div class=\"actions\">\r\n    <button \r\n    *ngIf=\"config.showCancelButton\" \r\n    class=\"button\" \r\n    (click)=\"onCancel()\"\r\n    >\r\n    {{config?.cancelButtonText ? config?.cancelButtonText : 'CANCEL'}}\r\n  </button>\r\n    <button class=\"button\" (click)=\"onOk()\">{{config?.confirmButtonText ? config?.confirmButtonText : 'OK'}}</button>\r\n  </div>\r\n</div>\r\n",
                    styles: [".dialogContainer{width:100%;height:100%;font-size:20px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1}.dialogContainer .title{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center;text-align:center;font-size:1.8rem;font-weight:600;padding:.8rem 0 1rem}.dialogContainer .icon{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center;text-align:center}.dialogContainer .text{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center;text-align:center;font-size:1.1rem;padding-bottom:2rem}.dialogContainer .actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;justify-content:space-around}.dialogContainer .actions button{border:none;background-color:#fff;color:#000;outline:0;padding:10px 20px;border-radius:.125rem;font-weight:600;font-size:1rem}.dialogContainer .actions button:hover{background-color:rgba(158,158,158,.2);cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    EuPopupInnerComponent.ctorParameters = function () { return [
        { type: DialogConfig },
        { type: DialogRef }
    ]; };
    return EuPopupInnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DialogInjector = /** @class */ (function () {
    function DialogInjector(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} flags
     * @return {?}
     */
    DialogInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} flags
     * @return {?}
     */
    function (token, notFoundValue, flags) {
        /** @type {?} */
        var value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    };
    return DialogInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ EuPopupService.ngInjectableDef = defineInjectable({ factory: function EuPopupService_Factory() { return new EuPopupService(inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR)); }, token: EuPopupService, providedIn: "root" });
    return EuPopupService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EuPopupModule = /** @class */ (function () {
    function EuPopupModule() {
    }
    EuPopupModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EuPopupComponent, EuPopupInsertionDirective, EuPopupInnerComponent],
                    imports: [CommonModule, BrowserModule],
                    exports: [EuPopupComponent, EuPopupInsertionDirective, EuPopupInnerComponent],
                    entryComponents: [EuPopupComponent, EuPopupInnerComponent],
                },] }
    ];
    return EuPopupModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { EuPopupService, EuPopupComponent, EuPopupModule, DialogConfig as ɵc, DialogRef as ɵb, EuPopupInsertionDirective as ɵa, EuPopupInnerComponent as ɵd };

//# sourceMappingURL=eu-popup.js.map