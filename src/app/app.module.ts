import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './client/index/index.component';
import { LoginComponent } from './client/login/login.component';
import { HTTP_INTERCEPTORS,  HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptors';

import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { DaboardComponent } from './component/daboard/daboard.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { EditproductComponent } from './component/editproduct/editproduct.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { CategoryComponent } from './component/category/category.component';
import { EditCategoryComponent } from './component/edit-category/edit-category.component';
import { CartComponent } from './client/cart/cart.component';
import { CardPageComponent } from './client/card-page/card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ProductComponent,
    DaboardComponent,
    AddproductComponent,
    EditproductComponent,
    AddCategoryComponent,
    CategoryComponent,
    EditCategoryComponent,
    CartComponent,
    CardPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule // Đảm bảo rằng bạn đã import RouterModule vào đây
  
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
