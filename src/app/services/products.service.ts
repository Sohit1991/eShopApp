import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from './../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productUrl = 'products';  

  constructor(private http: HttpClient) {
    console.log('ProductsService instantiated');
  }

  public getProducts(): Observable<Product> {
    // const procust_url = 'https://fakestoreapi.com/products';
    //const product_url =  'https://amcart-api.centralindia.cloudapp.azure.com/products';
    //const product_url =  'http://localhost:5156/products';
    const product_url=`${environment.productApiUrl}/${this.productUrl}`;
    // const procust_url = 'https://productapiwithapim-f6fbghgudmbnffh9.centralindia-01.azurewebsites.net/Products1';
    // return this.http.get<Product>(`${environment.productApiUrl}/${this.productUrl}`);
    return this.http.get<Product>(`${product_url}`);
  }
}
