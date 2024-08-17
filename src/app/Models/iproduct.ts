export interface IProduct {

  id:number;
  name:string;
  price:number;
  quantity:number;
  img:string;
  cateId:number;
  count?: number; // Add a count property to track the quantity
}
