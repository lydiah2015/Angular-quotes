import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Reality is an illusion", "NKK", "Elle Makini"),
    new Quote("Forever is overated", "Elle Makini", "Elle Makini"),
    new Quote("Promises are cheap", "Lydia Makini", "Elle Makini")
  ];

  constructor() {}

  ngOnInit() {}

  addQuote(quote) {
    this.quotes.unshift(quote);
    console.log(quote);
  }

  upVote(i) {
    this.quotes[i].upvote += 1;
  }
  downVote(i) {
    this.quotes[i].downvote += 1;
  }
  deleteQuote(i) {
    this.quotes.splice(i, 1);
  }
}
