import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './client/index/index.component';
import { LoginComponent } from './client/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { DaboardComponent } from './component/daboard/daboard.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { EditproductComponent } from './component/editproduct/editproduct.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { CategoryComponent } from './component/category/category.component';
import { EditCategoryComponent } from './component/edit-category/edit-category.component';
import { CartComponent } from './client/cart/cart.component';
import { CardPageComponent } from './client/card-page/card-page.component';


const routes: Routes = [
  {path:'',component: IndexComponent},
{path:'login', component:LoginComponent},
{path:'product',component:ProductComponent},
// {path:'product/:id',component:TrendyproductComponent},
{path:'daboard',component:DaboardComponent},
{path:'addproduct',component:AddproductComponent},
{path:'editproduct',component:EditproductComponent},
{path:'add-category',component:AddCategoryComponent},
{path:'category',component:CategoryComponent},
{path:'edit-category',component:EditCategoryComponent},
{path:'cart',component:CartComponent},
{path:'card-page', component:CardPageComponent},


{path:'admin',component: DaboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
