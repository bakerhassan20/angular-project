import { Component, OnInit,Input,Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from '../../../Services/static-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges{

 // productList: IProduct[];
  productListCat:IProduct[]=[];
 @Input() sentCatID:number = 0;
 @Output() TotalPriceChangeEvent :EventEmitter<number>;
 @Output() ProductCartEvent :EventEmitter<IProduct>;

  orderTotalPrice:number = 0;

  constructor( private StaticProdService:StaticProductsService
    ,private router:Router
  ){
       
   /*  this.productList = [

      {id:1,name:'pro1',price:20,quantity:700,img:'https://picsum.photos/200/300',cateId:2},
      {id:2,name:'pro2',price:20,quantity:0,img:'https://picsum.photos/200/300',cateId:3},
      {id:3,name:'pro3',price:20,quantity:500,img:'https://picsum.photos/200/300',cateId:1},
      {id:4,name:'pro1',price:20,quantity:800,img:'https://picsum.photos/200/300',cateId:2},
      {id:5,name:'pro2',price:20,quantity:0,img:'https://picsum.photos/200/300',cateId:3},
      {id:6,name:'pro3',price:20,quantity:200,img:'https://picsum.photos/200/300',cateId:1}
    ];
    this.productListCat =  this.productList; */
    this.TotalPriceChangeEvent = new EventEmitter<number>();
    this.ProductCartEvent = new EventEmitter<IProduct>();

  }

/*   private FilterProductsCatId(){
    if(this.sentCatID != 0){
      this.productListCat =  this.productList.filter(pro=>pro.cateId==this.sentCatID);
    }else{
      this.productListCat =  this.productList;
    }
  } */

  buy(proPrice:number,count:any,productCart:IProduct){
     this.orderTotalPrice +=+ count * proPrice;
     this.TotalPriceChangeEvent.emit(this.orderTotalPrice);
     this.ProductCartEvent.emit(productCart);

  }

  ngOnInit(): void {
    this.productListCat = this.StaticProdService.getAllProducts();
  }

  ngOnChanges(): void {
   /*  if (changes['sentCatID']) {
      this.FilterProductsCatId();
    } */

      this.productListCat = this.StaticProdService.getProductByCatId(this.sentCatID);
  }

  openProDetails(pID:number){
    this.router.navigate(['/Products/',pID]);
  }

}
