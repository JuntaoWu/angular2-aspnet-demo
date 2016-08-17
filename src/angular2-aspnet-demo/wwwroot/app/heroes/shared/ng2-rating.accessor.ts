
import { Component, Directive, Provider, forwardRef } from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/common";

import { Ng2RatingComponent } from "./ng2-rating.component";

const customValueAccessor = new Provider(NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => Ng2RatingComponent), multi: true
});

@Directive({
    selector: 'ng2-rating',
    host: { '(ratingChange)': 'onRatingChange($event)' },
    providers: [customValueAccessor]
})
export class Ng2RatingValueAccessor implements ControlValueAccessor {
    onChange = (_) => { };
    onTouched = () => { };

    constructor(private host: Ng2RatingComponent) {

    }

    writeValue(value: any): void {
        this.host.writeValue(value);
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}