import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from '../products/products';
import { tap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  path = environment.url + "/products";
  getProducts(): Observable<Product[]> {
    // alert(categoryId) categoryId nin gelip gelmediğin kontrol etmek için kullanabiliriz.

    let newPath = this.path;
   

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMassage = ''
    if (err.error instanceof ErrorEvent) {
      errorMassage = 'Bir hata oluştu' + err.error.message
    } else {
      errorMassage = 'Sistemsel bir hata'
    }
    return throwError(errorMassage)
  }
  getInfo(id:string): Observable<Product[]> {
    let newPath = this.path
    if (id) {
      newPath += "?id=" + id
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => (JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product: Product): Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError)
    );
  }
  deleteProducts(id:number): Observable<void>{
    return this.http.delete<void>(`${this.path}/${id}`)
  }
  getCurrentProducts(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.path}/${id}`)
  }
  updateProducts(id:number, data:Product): Observable<Product>{
    return this.http.put<Product>(`${this.path}/${id}`,data)
  }
}

