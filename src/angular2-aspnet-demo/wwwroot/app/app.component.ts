/// <reference path="../typings/index.d.ts" />

"use strict";

import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "@angular/router-deprecated";

import { HeroesComponent } from "./heroes/index";

@Component({
    selector: "toh-app",
    templateUrl: `
        <div><toh-nav></toh-nav></div>
        <div id="page-wrapper">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
    //{
    //    path: '/account',
    //    name: 'AccounList',
    //    component: AccountListComponent
    //}
])
export class AppComponent implements OnInit {
    private title: "AppComponent";

    constructor(
        private _viewContainer: ViewContainerRef) {

    }
    ngOnInit() {
        $("#side-menu").metisMenu();

        $(document).on("click", "button", function () {
            //Note that if we do not blur the default focus on button, user might trigger the button with Enter key multiple times.
            this.blur();
        });
    }
}