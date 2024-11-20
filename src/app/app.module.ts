import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {HelloComponent} from "./hello.component";
import {Test1Component} from "./test1/test1.component";
import {Test2Component} from "./test2/test2.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {Test3Component} from "./test3/test3.component";
import {HeavyComponent} from "./test3/heavy/heavy.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    HeavyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
