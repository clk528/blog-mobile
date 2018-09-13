import {NgModule} from "@angular/core";

import {IonicModule} from "ionic-angular";
import {HttpClientModule} from "@angular/common/http";

import {HttpService} from "./services/http.service";
import {ConfigService} from "./services/config.service";

@NgModule({
    imports: [
        IonicModule,
        HttpClientModule
    ],
    providers: [
        HttpService,
        ConfigService
    ]
})
export class CoreModule {
}
