import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[]= [
    {id:1, name: "Nelson Mandela", description:"The gretest glory in living lies not in never falling, but in rising every time we fall."},
    {id:2, name:"Steve Jobs", description:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma-which is living with the rewults of other people's thinking." },
    {id:2, name:"Mother Theresa", description:"Spread love everywhere you go. Let no one ever come to you without leaving happier." },
  ];


  constructor() { }

  ngOnInit(): void {
  } 

}
