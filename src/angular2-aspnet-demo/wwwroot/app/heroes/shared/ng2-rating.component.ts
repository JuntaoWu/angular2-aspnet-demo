
import { Component, Directive, Input, Output, EventEmitter } from "@angular/core";
//import { Ng2RatingValueAccessor } from "./ng2-rating.accessor";
import { Provider, forwardRef } from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/common";


@Component({
    selector: "ng2-rating",
    templateUrl: "app/heroes/shared/ng2-rating.html",
    styleUrls: ["app/heroes/shared/ng2-rating.css"]
})
export class Ng2RatingComponent {
    @Input() rating: number = 0;
    @Output() ratingChange = new EventEmitter<any>();

    constructor() {

    }

    changeRating(index) {
        if ((index + 1) != this.rating) {
            this.rating = index + 1;
        }
        else {
            this.rating = index + 0.5;
        }
        this.ratingChange.emit(this.rating);
    }

    writeValue(value) {
        if (this.rating !== value) {
            this.rating = value;
        }
    }
}


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

