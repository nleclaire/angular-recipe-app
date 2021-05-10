import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const herokuUrl = 'https://damp-bayou-38809.herokuapp.com';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategories(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/categories`, requestOptions);
  }

  createCategory(newCategory): any {
    console.log(newCategory);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/categories/`, newCategory, requestOptions);
  }

}
