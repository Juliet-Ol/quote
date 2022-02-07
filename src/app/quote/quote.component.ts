import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[]= [
    new Quote (" ", "The gretest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"),
    new Quote(" ", "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma-which is living with the results of other people's thinking.", "Steve Jobs"),
    new Quote(" ", "Spread love everywhere you go. Let no one ever come to you without leaving happier.",  "Mother Theresa"),
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete: any, index: any){
    if(isComplete) {
      this.quotes.splice(index, 1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  } 

}
