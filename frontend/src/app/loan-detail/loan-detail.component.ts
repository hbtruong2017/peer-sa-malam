import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {
  loanId: number;
  loanInfo: any;
  pendingLoanList: any;
  borrowerId: number;
  borrowerInfo: any;
  borrowerAccount: any;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.loanId = params['id']
    })
    this.dataService.getLoanInfoByLoanId(this.loanId).subscribe((data: any) => {
      this.loanInfo = data.loanInfo[0];
      this.borrowerId = this.loanInfo.borrowerAccount;
      this.dataService.getCustomerDetailsFromServer(this.borrowerId).subscribe((data: any) => {
        this.borrowerInfo = data.customerInfo[0];
        this.borrowerAccount = this.borrowerInfo.accountNumber;
      })
    })
    this.dataService.getAllPendingLoans().subscribe((data:any) => {
      this.pendingLoanList = data.allLoans.reverse();
    }, error => {
      console.log(error)
    })
  }

  goToLoan(id: number) {
    this.router.navigate(['/loan'], { queryParams: { id: id } })
  }

}
