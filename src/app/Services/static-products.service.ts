import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  private prodList : IProduct[];
  constructor() { 

    this.prodList = [
      {id:1,name:'pro1',price:20,quantity:700,img:'https://picsum.photos/200/300',cateId:2},
      {id:2,name:'pro2',price:20,quantity:0,img:'https://picsum.photos/200/300',cateId:3},
      {id:3,name:'pro3',price:20,quantity:500,img:'https://picsum.photos/200/300',cateId:1},
      {id:4,name:'pro1',price:20,quantity:800,img:'https://picsum.photos/200/300',cateId:2},
      {id:5,name:'pro2',price:20,quantity:0,img:'https://picsum.photos/200/300',cateId:3},
      {id:6,name:'pro3',price:20,quantity:200,img:'https://picsum.photos/200/300',cateId:1}
    ];

  }
  getAllProducts():IProduct[]
  {
    return this.prodList;

  }
  getProductByCatId(cID:number):IProduct[]
  {
       if(cID == 0){
        return this.prodList;
       }else{
        return this.prodList.filter(prd=>prd.cateId == cID);
       }
       
  }

  getProductById(pID:number):IProduct | null
  {
      let foundProduct = this.prodList.find(pro=>pro.id == pID);
      return foundProduct?foundProduct:null;
  }

 
}
