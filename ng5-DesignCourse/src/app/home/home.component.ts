import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  itemCount: Number;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}
