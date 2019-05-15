import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-ecom-cart',
  templateUrl: './ecom-cart.component.html',
  styleUrls: ['./ecom-cart.component.scss']
})
export class EcomCartComponent implements OnInit {

  cart : any = {};
  products : any = [];
  constructor(private api : ApiServiceService) { }

  ngOnInit() {
  	this.cart = this.api.getCart();
  	this.products = this.cart.products;
  }

  deleteCart(pId){
  	this.products = this.api.deleteCart(pId);
  }

}
