
"use strict";

import { enableProdMode, provide } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import { bootstrap, platformBrowserDynamic }  from "@angular/platform-browser-dynamic";

//import { AppComponent } from "./app/app.component";
import { AppModule } from "./app/app.module";

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
//bootstrap(AppComponent, [HTTP_PROVIDERS]);