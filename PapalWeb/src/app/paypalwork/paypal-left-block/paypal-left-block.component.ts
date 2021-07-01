import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypal-left-block',
  templateUrl: './paypal-left-block.component.html',
  styleUrls: ['./paypal-left-block.component.css']
})
export class PaypalLeftBlockComponent {
public online_mobile_data=[
  { title:"Sing up",
    description:"It's free and only takes a few minutes"},
  {title:"Link a credit / debit card",
  description:"You only have to do it once"},
  {title:"Pay with PayPal at your favourite brands",
  description:"Wherever you see the PayPal button"},
  {title:"Receive email receipt of your purchase",
  description:"The seller will fulfil your order"},
]
}

