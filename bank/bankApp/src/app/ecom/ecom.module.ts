import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { EcomPage } from './ecom.page';
import { EcomProductComponent } from '../ecom-product/ecom-product.component';
import { EcomProductDetailComponent } from '../ecom-product-detail/ecom-product-detail.component';

import { EcomCartComponent } from '../ecom-cart/ecom-cart.component';
import { EcomDelAddressComponent } from '../ecom-del-address/ecom-del-address.component';
import { EcomDelPaymentComponent } from '../ecom-del-payment/ecom-del-payment.component';
import { EcomOrderComponent } from '../ecom-order/ecom-order.component';
import { EcomTrackComponent } from '../ecom-track/ecom-track.component';

const routes: Routes = [
  {
    path: '',
    component: EcomPage
  },
  {path: 'product', component: EcomProductComponent},
  {path: 'product/detail', component: EcomProductDetailComponent},
  {path: 'cart', component: EcomCartComponent},
  {path: 'delivery/address', component: EcomDelAddressComponent},
  {path: 'delivery/payment', component: EcomDelPaymentComponent},
  {path: 'order', component: EcomOrderComponent},
  {path: 'track', component: EcomTrackComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EcomPage, EcomProductComponent, EcomProductDetailComponent, EcomCartComponent,
  EcomDelAddressComponent, EcomDelPaymentComponent, EcomOrderComponent, EcomTrackComponent]
})
export class EcomPageModule {}
