import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements AfterViewInit{

  catList:ICategory[];
  selectedCatID:number = 0;
  RevivedOrderTotalPrice:number = 0;
  productCartList:IProduct[]=[];

  @ViewChild('clintNameInput') clintNameInputElem !: ElementRef;
  @ViewChild('productListComponent') productListComponentObj!:ProductListComponent;
 constructor(){

      this.catList =[
        {id:1,name:'lab'},
        {id:2,name:'phone'},
        {id:3,name:'tablet'},
        {id:0,name:'all'},
      ]

 }

 OnTotalPriceChange(TotalPrice:number){
    this.RevivedOrderTotalPrice=TotalPrice;
 }

 OnBuyNewProduct(newProduct:IProduct){
  // check if product exist and increce count by 1
  const index = this.productCartList.findIndex(product => product.id === newProduct.id);
  if(index !== -1){
    this.productCartList[index].count = (this.productCartList[index].count || 0) + 1;

  }else{
    newProduct.count = 1; // Set initial count
    this.productCartList.push(newProduct);
  }

}

OnRemoveProduct(productToRemoveID:number){
 // Find the index of the product to remove
 const index = this.productCartList.findIndex(product => product.id === productToRemoveID);

 // If the product is found, remove it from the array
 if (index !== -1) {
   this.productCartList.splice(index, 1);
 }
}

ngAfterViewInit():void{
  this.clintNameInputElem.nativeElement.value = 'your name here';
}
}
