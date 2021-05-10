import { CategoryService } from 'src/app/services/category/category.service';
import { Component, OnInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: any[];
  public categoryName: string;
  public categoryDescription: string;

  constructor(private categoryService: CategoryService) { }

  getCategories(): any {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    }, err => console.log(err));
  }

  createCategory(): any {
    const newCategory = {
      name: this.categoryName,
      description: this.categoryDescription
    };
    this.categoryService.createCategory(newCategory).subscribe(response => {
      this.categories = [...this.categories, response];
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getCategories();

    if (!localStorage.getItem('currentUser')) {
      const toastHTML = '<span>You must login to see your categories</span>';
      M.toast({html: toastHTML});
    }
  }

}
