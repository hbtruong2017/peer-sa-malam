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

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.loanId = params['id']
    })
    this.dataService.getLoanInfoByLoanId(this.loanId).subscribe((data: any) => {
      this.loanInfo = data.loanInfo[0];
    })
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

}
