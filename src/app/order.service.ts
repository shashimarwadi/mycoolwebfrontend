import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  //backend_service_host = "localhost";
  backend_service_host = "mycoolapp-svc";

  //private ORDER_CREATE_URL = "http://"+ this.backend_service_host +":8081/order";
  private ORDER_CREATE_URL = "/order";
  
  placeOrder(orderJSON : any) {

    let options = new RequestOptions({
      headers: new Headers({
            'Content-Type': 'application/json'
          })
      });

    return this.http.post(this.ORDER_CREATE_URL, orderJSON, options)
      .map(res => {
        res.json()
        alert("Order Number: " + res.json().orderNumber)
      })
      .catch((error: any) => {
        alert("Error: " + (new Error(error.status)))
        return Observable.throw(new Error(error.status));
      });
    }
}
