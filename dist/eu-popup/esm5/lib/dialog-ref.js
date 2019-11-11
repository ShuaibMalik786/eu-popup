/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
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
export { DialogRef };
if (false) {
    /** @type {?} */
    DialogRef.prototype._afterClosed;
    /** @type {?} */
    DialogRef.prototype.afterClosed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LXBvcHVwLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekMsSUFBQTtJQUNFOzRCQUdnQyxJQUFJLE9BQU8sRUFBTzsyQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7S0FIOUQ7Ozs7O0lBS0QseUJBQUs7Ozs7SUFBTCxVQUFNLE1BQVk7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEM7b0JBWEg7SUFZQyxDQUFBO0FBVkQscUJBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWxvZ1JlZiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBhZnRlckNsb3NlZDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNsb3NlKHJlc3VsdD86IGFueSkge1xyXG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dChyZXN1bHQpOyBcclxuICB9XHJcbn1cclxuIl19