import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  orderForm : any;
  title = 'mycoolwebfrontend';
  item_iist: any;


  constructor(private orderService : OrderService) { }
 
  ngOnInit() {
    this.orderForm = new FormGroup({
      item01: new FormControl(''),
      item02: new FormControl(''),
      item03: new FormControl(''),
      item04: new FormControl(''),
      item05: new FormControl(''),
      qty01: new FormControl(''),
      qty02: new FormControl(''),
      qty03: new FormControl(''),
      qty04: new FormControl(''),
      qty05: new FormControl('')
    });
    
    this.item_iist = ["Item One", "Item two", "Item Three", "Item Four", "Item Five"];
    
  }

  onSubmit() {
    // console.log(this.orderForm.controls['item01'].value);
    // console.log(this.orderForm.controls['qty01'].value);
    // console.log(this.orderForm.controls['item02'].value);
    // console.log(this.orderForm.controls['item03'].value);
    // console.log(this.orderForm.controls['item04'].value);
    // console.log(this.orderForm.controls['item05'].value);

     let orderJSONstr = "{\"header\" : {} , \"itemDetails\" : [";

    if(this.orderForm.controls['item01'].value) {
      orderJSONstr += "{\"itemID\": \""+this.orderForm.controls['item01'].value+"\", \"quantity\":"+this.orderForm.controls['qty01'].value+"}";
    }
    if(this.orderForm.controls['item02'].value) {
      orderJSONstr += ", {\"itemID\": \""+this.orderForm.controls['item02'].value+"\", \"quantity\":"+this.orderForm.controls['qty02'].value+"}";
    }
    if(this.orderForm.controls['item03'].value) {
      orderJSONstr += ", {\"itemID\": \""+this.orderForm.controls['item03'].value+"\", \"quantity\":"+this.orderForm.controls['qty03'].value+"}";
    }
    if(this.orderForm.controls['item04'].value) {
      orderJSONstr += ", {\"itemID\": \""+this.orderForm.controls['item04'].value+"\", \"quantity\":"+this.orderForm.controls['qty04'].value+"}";
    }
    if(this.orderForm.controls['item05'].value) {
      orderJSONstr += ", {\"itemID\": \""+this.orderForm.controls['item05'].value+"\", \"quantity\":"+this.orderForm.controls['qty05'].value+"}";
    }
              
    orderJSONstr += "] }";

    console.log(orderJSONstr);

    this.orderService.placeOrder(orderJSONstr).subscribe(
      res => {
        console.log(res);
        },
      err => { 
        console.log("->"+err)
        });
  }

}
