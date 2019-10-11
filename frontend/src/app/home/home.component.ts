import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( () => {

    $('.form-group').each((i,e) => {
      $('.form-control', e)
        .focus( function () {
          e.classList.add('not-empty');
        })
        .blur( function () {
          this.value === '' ? e.classList.remove('not-empty') : null;
        })
      ;
    });
  });     

  }
}
