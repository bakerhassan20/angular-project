import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Component/order/product-list/product-list.component';
import { OrderMasterComponent } from './Component/order/order-master/order-master.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { MainLayoutComponent } from './Component/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

const routes: Routes = [


    { path:'',component:MainLayoutComponent,children:[

      { path:'', redirectTo:'/Home' ,pathMatch:'full'},
      { path:'Home', component:HomeComponent},
      { path:'Products', component:ProductListComponent},
      { path:'Products/:id', component:ProductDetailsComponent},
      { path:'Order', component:OrderMasterComponent,canActivate:['AuthGuard']},

    ]},


 {path:'Login',component:LoginComponentComponent},
 //{ path:'**', component:NotFoundComponent},  // error 404 route not found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
