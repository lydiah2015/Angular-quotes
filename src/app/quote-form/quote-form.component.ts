import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Quote} from "../quote";


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quote:string;
  publisher:string;
  author:string;

 @Output() emitQuote = new EventEmitter<Quote>();

  constructor() { }

  ngOnInit() {

  }

  submitQuote(){
  let quote= new Quote(this.quote,this.author,this.publisher)
  this.emitQuote.emit(quote)
  }

}
