import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cold',
  templateUrl: './cold.component.html',
  styleUrls: ['./cold.component.css']
})
export class ColdComponent implements OnInit {
  coldBody;
  hotBody;
  cold = Observable.interval(1000).take(5).map(x => x+1);
  hot = Observable.interval(1000).take(5).map(x => x+1).publish().refCount();

  constructor() { }

  ngOnInit() {
    this.coldBody = document.body.querySelectorAll('p')[1];
    this.hotBody = document.body.querySelectorAll('p')[2];
  }

  startCold() {
    this.cold.subscribe(i => this.coldBody.innerHTML += ('a: ' + i + '<br>'));
    setTimeout(() => this.cold.subscribe(i => this.coldBody.innerHTML += ('---b: ' + i + '<br>')), 2500);
  }

  startHot() {
    this.hot.subscribe(i => this.hotBody.innerHTML += ('a: ' + i + '<br>'));
    setTimeout(() => this.hot.subscribe(i => this.hotBody.innerHTML += ('---b: ' + i + '<br>')), 2500);
  }

}
