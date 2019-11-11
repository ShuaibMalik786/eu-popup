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
export { DialogInjector };
if (false) {
    /** @type {?} */
    DialogInjector.prototype._parentInjector;
    /** @type {?} */
    DialogInjector.prototype._additionalTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXUtcG9wdXAvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxJQUFBO0lBQ0Usd0JBQ1UsaUJBQ0E7UUFEQSxvQkFBZSxHQUFmLGVBQWU7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCO0tBQ3ZCOzs7Ozs7O0lBUUosNEJBQUc7Ozs7OztJQUFILFVBQUksS0FBVSxFQUFFLGFBQW1CLEVBQUUsS0FBVzs7UUFDOUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUUvQyxJQUFJLEtBQUs7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUV2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQTtLQUMzRDt5QkFwQkg7SUFxQkMsQ0FBQTtBQW5CRCwwQkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgVHlwZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdEZsYWdzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dJbmplY3RvciBpbXBsZW1lbnRzIEluamVjdG9yIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3BhcmVudEluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgX2FkZGl0aW9uYWxUb2tlbnM6IFdlYWtNYXA8YW55LCBhbnk+XHJcbiAgKSB7fVxyXG5cclxuICBnZXQ8VD4oXHJcbiAgICB0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+LFxyXG4gICAgbm90Rm91bmRWYWx1ZT86IFQsXHJcbiAgICBmbGFncz86IEluamVjdEZsYWdzXHJcbiAgKTogVFxyXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KVxyXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55LCBmbGFncz86IGFueSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9hZGRpdGlvbmFsVG9rZW5zLmdldCh0b2tlbilcclxuXHJcbiAgICBpZiAodmFsdWUpIHJldHVybiB2YWx1ZVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnRJbmplY3Rvci5nZXQ8YW55Pih0b2tlbiwgbm90Rm91bmRWYWx1ZSlcclxuICB9XHJcbn1cclxuIl19