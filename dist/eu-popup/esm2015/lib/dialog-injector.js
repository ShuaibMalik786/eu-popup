/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class DialogInjector {
    /**
     * @param {?} _parentInjector
     * @param {?} _additionalTokens
     */
    constructor(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} flags
     * @return {?}
     */
    get(token, notFoundValue, flags) {
        /** @type {?} */
        const value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    }
}
if (false) {
    /** @type {?} */
    DialogInjector.prototype._parentInjector;
    /** @type {?} */
    DialogInjector.prototype._additionalTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXUtcG9wdXAvIiwic291cmNlcyI6WyJsaWIvZGlhbG9nLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNOzs7OztJQUNKLFlBQ1UsaUJBQ0E7UUFEQSxvQkFBZSxHQUFmLGVBQWU7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCO0tBQ3ZCOzs7Ozs7O0lBUUosR0FBRyxDQUFDLEtBQVUsRUFBRSxhQUFtQixFQUFFLEtBQVc7O1FBQzlDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFL0MsSUFBSSxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFdkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUE7S0FDM0Q7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBUeXBlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0RmxhZ3MgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWxvZ0luamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfcGFyZW50SW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBfYWRkaXRpb25hbFRva2VuczogV2Vha01hcDxhbnksIGFueT5cclxuICApIHt9XHJcblxyXG4gIGdldDxUPihcclxuICAgIHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4sXHJcbiAgICBub3RGb3VuZFZhbHVlPzogVCxcclxuICAgIGZsYWdzPzogSW5qZWN0RmxhZ3NcclxuICApOiBUXHJcbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpXHJcbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnksIGZsYWdzPzogYW55KSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2FkZGl0aW9uYWxUb2tlbnMuZ2V0KHRva2VuKVxyXG5cclxuICAgIGlmICh2YWx1ZSkgcmV0dXJuIHZhbHVlXHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEluamVjdG9yLmdldDxhbnk+KHRva2VuLCBub3RGb3VuZFZhbHVlKVxyXG4gIH1cclxufVxyXG4iXX0=