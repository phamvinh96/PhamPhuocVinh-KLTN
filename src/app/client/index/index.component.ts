import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { AuthServiceService } from 'src/app/service/auth.service.service';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  listProduct : any;
  listItemInCart : any;
  listCategory:any;
 AuthServiceService: any;
 loader: Boolean=true;
 searchResult:undefined|Product[];
  constructor(private productService: ProductService,public cartService:CartService,private categoryService: CategoryService,private authService:AuthServiceService,private router: Router){}

  ngOnInit(): void {
    this.getListProduct();
    this.getListCategory();
  }


  getListProduct(){
    this.productService.getListProduct().subscribe(data =>{
      this.listProduct = data;
      this.loader=false;
      this.cartService.loadCart();
    })
  }
  getListCategory(){
    this.categoryService.getListCategory().subscribe(data =>{
      this.listCategory = data;
      this.loader=false;
    })
  }
  
  addToCart(item: any){
    if (this.authService.isLoggedIn()){
    this.cartService.getItems();
    this.cartService.addToCart(item,1);
    alert('Add card successfully')
    }else{
      this.router.navigate(['/login']);

    }
 
  }
  

}
