import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/publish';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {
  body1;
  body2;
  subscription;
  subscription2;
  hot = Observable.fromEvent(document, 'keydown').publish();

  constructor() { }

  ngOnInit() {
    this.body1 = document.body.querySelectorAll('p')[1];
    this.body2 = document.body.querySelectorAll('p')[2];
    this.hot.connect();
  }

  subscribe() {
    this.subscription = this.hot.subscribe(keyDown => this.body1.innerHTML += "Keydown happened<br>");
  }

  unsubscribe() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

  addSubscription() {
    this.subscription2 = this.hot.subscribe(keyDown => this.body2.innerHTML += "Keydown happened<br>");
  }

}
