import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { Ng2RatingComponent, Ng2RatingValueAccessor } from "./heroes/shared/index";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent, Ng2RatingValueAccessor
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }