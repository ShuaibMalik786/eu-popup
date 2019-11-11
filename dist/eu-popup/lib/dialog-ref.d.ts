import { Observable } from 'rxjs';
export declare class DialogRef {
    constructor();
    private readonly _afterClosed;
    afterClosed: Observable<any>;
    close(result?: any): void;
}
