import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../Services/static-products.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  currProID:number=0;
  currPro:IProduct | null =null;
  constructor(private activatedRoute:ActivatedRoute,private proService:StaticProductsService){
      
  }   

  ngOnInit(): void {
      this.currProID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.currPro = this.proService.getProductById(this.currProID);
  }
}
