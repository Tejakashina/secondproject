import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChhildComponent } from './chhild/chhild.component';
import { PaarentComponent } from './paarent/paarent.component';

const routes: Routes = [{ path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
{path:"child", component:ChhildComponent},
{path:"parent",component:PaarentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
