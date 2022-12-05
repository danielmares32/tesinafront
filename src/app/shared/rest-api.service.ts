import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from './usuario';
import { Chat } from './chat';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'https://tesinabackfunction.azurewebsites.net/api';

  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };  

  // HttpClient API get() method => Fetch employees list
  getUsuarios(): Observable<Usuario> {
    return this.http
      .get<Usuario>(this.apiURL + '/usuarios')
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => Fetch employee
  getUsuario(usuario: any): Observable<Usuario> {
    console.log(JSON.stringify(usuario));
    return this.http
      .post<Usuario>(this.apiURL + '/usuarios/',JSON.stringify(usuario),this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create employee
  createUsuario(usuario: any): Observable<Usuario> {
    console.log(JSON.stringify(usuario));
    return this.http
      .post<Usuario>(
        this.apiURL + '/usuarios/create',
        JSON.stringify(usuario),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update employee
  updateUsuario(id: any, usuario: any): Observable<Usuario> {
    return this.http
      .put<Usuario>(
        this.apiURL + '/usuarios/' + id,
        JSON.stringify(usuario),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete employee
  deleteUsuario(id: any) {
    return this.http
      .delete<Usuario>(this.apiURL + '/usuarios/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }



  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}