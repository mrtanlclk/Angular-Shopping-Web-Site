import { AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, QueryList, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class BlockUI implements AfterViewInit, OnDestroy {
    el: ElementRef;
    cd: ChangeDetectorRef;
    target: any;
    autoZIndex: boolean;
    baseZIndex: number;
    styleClass: string;
    templates: QueryList<any>;
    mask: ElementRef;
    _blocked: boolean;
    contentTemplate: TemplateRef<any>;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    get blocked(): boolean;
    set blocked(val: boolean);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    block(): void;
    unblock(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUI, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BlockUI, "p-blockUI", never, { "target": "target"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "styleClass": "styleClass"; "blocked": "blocked"; }, {}, ["templates"], ["*"]>;
}
export declare class BlockUIModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockUIModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BlockUIModule, [typeof BlockUI], [typeof i1.CommonModule], [typeof BlockUI]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BlockUIModule>;
}
