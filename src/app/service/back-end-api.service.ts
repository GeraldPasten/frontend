import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class BackEndApiService {
   
 url = url;
  
  constructor(private http: HttpClient, private router: Router) { }

  private getAuthToken(): string | null {
    return sessionStorage.getItem('authKey');
    
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.router.navigate(['/login']);

    }
    return throwError(error);
  }

  public getData() : Observable<any> {
    const authToken = this.getAuthToken();

    if (authToken) {
      
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${authToken}`
      });
    
      return this.http.get<any>(this.url, { headers: headers }).pipe(
        catchError(this.handleError.bind(this))
      );

    }
    else {
      const errorMessage = 'Authentication token is not available.';
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }
}
