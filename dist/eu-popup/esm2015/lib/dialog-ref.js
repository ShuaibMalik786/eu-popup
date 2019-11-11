/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
export class DialogRef {
    constructor() {
        this._afterClosed = new Subject();
        this.afterClosed = this._afterClosed.asObservable();
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this._afterClosed.next(result);
    }
}
if (false) {
    /** @type {?} */
    DialogRef.prototype._afterClosed;
    /** @type {?} */
    DialogRef.prototype.afterClosed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LXBvcHVwLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekMsTUFBTTtJQUNKOzRCQUdnQyxJQUFJLE9BQU8sRUFBTzsyQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7S0FIOUQ7Ozs7O0lBS0QsS0FBSyxDQUFDLE1BQVk7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nUmVmIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FmdGVyQ2xvc2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIGFmdGVyQ2xvc2VkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9hZnRlckNsb3NlZC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY2xvc2UocmVzdWx0PzogYW55KSB7XHJcbiAgICB0aGlzLl9hZnRlckNsb3NlZC5uZXh0KHJlc3VsdCk7IFxyXG4gIH1cclxufVxyXG4iXX0=