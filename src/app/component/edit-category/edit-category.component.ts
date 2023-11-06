import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/class/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  categoryData: undefined | Category;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private category: CategoryService,private routers: Router) {}

  ngOnInit(): void {
    let categoryId = this.route.snapshot.paramMap.get('id');
    console.warn(categoryId);
    categoryId &&
      this.category.getCategory(categoryId).subscribe((data) => {
        console.warn(data);
        this.categoryData = data;
      });
  }
  submit(data: any) {
    if (this.categoryData) {
      data.id = this.categoryData.id;
    }
    this.category.updateCategory(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
        alert('Edit Categoty successfully')
        this.routers.navigate(['/daboard/edit-category']);
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
    console.warn(data);
  }

}
