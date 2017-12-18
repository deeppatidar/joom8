import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[clickOutside]',
})
export class ClickOutsideDirective {

    @Output() public clickOutside = new EventEmitter();
    constructor(private _elementRef: ElementRef) {

    }

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        console.log(targetElement);
        console.log(this._elementRef.nativeElement.contains);
        const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
        console.log(isClickedInside);
        if (!isClickedInside) {
            this.clickOutside.emit(null);
        }
    }
}
