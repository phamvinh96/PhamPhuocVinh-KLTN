import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const ORDER_API = "http://localhost:4000/order/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OderServiceService {

  constructor(private http:HttpClient) { }


  getListOrder():Observable<any>{
    return this.http.get('http://localhost:4000/order',httpOptions);
  }

  createOrder(orderData: any):Observable<any>{
    return this.http.post('http://localhost:4000/order',orderData,httpOptions);
  }
}
