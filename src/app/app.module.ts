import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { environment } from "./../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./core/components/login/login.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { ProductsComponent } from "./shopping/components/products/products.component";
import { ShoppingModule } from "./shopping/shopping.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AdminModule,
    SharedModule,
    ShoppingModule,
    CoreModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: "",
        component: ProductsComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
