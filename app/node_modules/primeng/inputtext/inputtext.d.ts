import { ElementRef, DoCheck } from '@angular/core';
import { NgModel } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class InputText implements DoCheck {
    el: ElementRef;
    ngModel: NgModel;
    filled: boolean;
    constructor(el: ElementRef, ngModel: NgModel);
    ngDoCheck(): void;
    onInput(e: any): void;
    updateFilledState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputText, [null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputText, "[pInputText]", never, {}, {}, never>;
}
export declare class InputTextModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<InputTextModule, [typeof InputText], [typeof i1.CommonModule], [typeof InputText]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<InputTextModule>;
}
