import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { product } from './product';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {
    path :'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {path:'home', component:HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'product', component:ProductComponent},
  {path:'about', component:AboutComponent},
  {path:'add', component:AddProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
