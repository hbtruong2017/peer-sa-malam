import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pendingLoanList: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  //   "AllLoans": [
  //     {
  //         "id": 1,
  //         "borrowerAccount": 777,
  //         "loanerAccount": null,
  //         "loanStatus": "pending",
  //         "imgLink": "www.google.com",
  //         "loanCategory": "Vehicle",
  //         "loanDescription": "Buying a Ferrari",
  //         "amount": 200,
  //         "interestRate": 5.1,
  //         "duration": 32
  //     }
  // ]

    this.dataService.getAllPendingLoans().subscribe((data:any) => {
      console.log(data)
      this.pendingLoanList = data.allLoans.reverse();
      console.log(this.pendingLoanList)
    }, error => {
      console.log(error)
    })
  }

  goToLoan(id: number) {
    this.router.navigate(['/loan'], { queryParams: { id: id } })
  }

  gotoTbank() {
    window.location.href = "http://tbankonline.com/SMUtBank_RIB2/#/login?redirect=%2F";
  }
}
