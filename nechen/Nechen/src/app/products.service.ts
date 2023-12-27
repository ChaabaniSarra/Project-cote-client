import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { product } from './product';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,private router: Router) { }

  public get(): Observable<product[]> {
    const url = 'http://localhost:3000/product';
    return this.http.get<product[]>(url);
  }


  addProduct(newproduct: product): Observable<product[]> {
    const url = 'http://localhost:3000/product';
    console.log('Adding product...');
    
    return this.http.post<product[]>(url, newproduct).pipe(
      tap(() => {
          this.router.navigate(['']);
         
        })
      
    );
  }
  
  deleteproduct(id: number): Observable<product[]> {
    const url = `http://localhost:3000/tables/${id}`;
    window.location.reload();
    return this.http.delete<product[]>(url);
  }

  // public updateTable(updatedTable: Table): Observable<Table> {
  //   const url = `http://localhost:3000/tables/${updatedTable.id}`;
    
  //   return this.http.put<Table>(url, updatedTable).pipe(
  //     tap(() => {
  //         this.router.navigate(['']);
          
  //       }));
  // }
  // public getTableById(id: number): Observable<Table> {
  //   const url = `http://localhost:3000/tables/${id}`;
  //   return this.http.get<Table>(url);
  // }


}
