import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  cname:string;
  constructor() { 
    this.cname="Murthy"
  }
  
  ngOnInit() {
  }

}
