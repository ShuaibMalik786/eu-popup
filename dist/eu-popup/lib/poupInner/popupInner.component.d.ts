import { OnInit } from '@angular/core';
import { DialogConfig } from '../dialog-config';
import { DialogRef } from '../dialog-ref';
export declare class EuPopupInnerComponent implements OnInit {
    config: DialogConfig;
    dialog: DialogRef;
    constructor(config: DialogConfig, dialog: DialogRef);
    onCancel(): void;
    onOk(): void;
    ngOnInit(): void;
}
