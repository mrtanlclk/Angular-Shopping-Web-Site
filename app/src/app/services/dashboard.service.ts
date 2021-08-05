import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { tap, catchError} from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  
  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/dashboard";

  getDashboard():Observable<Dashboard[]>{
    return this.http.get<Dashboard[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
    handleError(err: HttpErrorResponse){
      let errorMassage = ''
      if(err.error instanceof ErrorEvent) {
        errorMassage = 'Bir hata oluştu' + err.error.message
      }else{
        errorMassage = 'Sistemsel bir hata'
      }
      return throwError(errorMassage)
    }
  
}
