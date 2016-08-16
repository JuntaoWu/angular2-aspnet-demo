
"use strict";

import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import { bootstrap }  from "@angular/platform-browser-dynamic";

import { AppComponent } from "./app/app.component";

enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS]);