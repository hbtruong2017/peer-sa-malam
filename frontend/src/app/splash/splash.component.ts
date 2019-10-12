import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  showLogIn: boolean = false;

  constructor() { }

  ngOnInit() {

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
  }

}
