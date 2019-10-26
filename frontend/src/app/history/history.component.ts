import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  isBorrower: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  ActiveLender() {
    this.isBorrower = false;
    console.log("HELLO IT WORKS")
  }
  ActiveBorrower(){
    this.isBorrower = true;
    console.log("PURE JOY")
  }
}
