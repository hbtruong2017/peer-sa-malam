import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  isBorrower: boolean = true;
  borrowerPendingLoanList: any;
  borrowerActiveLoanList: any;
  borrowerDefaultedLoanList: any;
  borrowerCompleteLoanList: any;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getBorrowerPendingLoans(5717).subscribe((data:any) => {
      console.log(data);
      this.borrowerPendingLoanList = data.borrowedLoans.reverse();
    }, error => {
      console.log(error)
    })

    this.dataService.getBorrowerActiveLoans(5717).subscribe((data:any) => {
      console.log(data);
      this.borrowerActiveLoanList = data.borrowedLoans.reverse();
    }, error => {
      console.log(error)
    })

      this.dataService.getBorrowerDefaultedLoans(5717).subscribe((data:any) => {
        console.log(data);
        this.borrowerDefaultedLoanList = data.borrowedLoans.reverse();
      }, error => {
        console.log(error)
    })

    this.dataService.getBorrowerCompleteLoans(5717).subscribe((data:any) => {
        console.log(data);
        this.borrowerCompleteLoanList = data.borrowedLoans.reverse();
      }, error => {
        console.log(error)
    })
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
