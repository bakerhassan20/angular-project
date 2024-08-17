import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductListComponent } from './Component/order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { OrderMasterComponent } from './Component/order/order-master/order-master.component';
import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { MainLayoutComponent } from './Component/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    OrderMasterComponent,
    LoginComponentComponent,
    MainLayoutComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
