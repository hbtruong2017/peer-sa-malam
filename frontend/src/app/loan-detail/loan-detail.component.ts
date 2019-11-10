import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})
export class LoanDetailComponent implements OnInit {
  loanId: number;
  loanInfo: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.loanId = params['id']
    })
    this.dataService.getLoanInfoByLoanId(this.loanId).subscribe((data: any) => {
      this.loanInfo = data.loanInfo[0];
      console.log(this.loanInfo)
      
    })
  }

}
