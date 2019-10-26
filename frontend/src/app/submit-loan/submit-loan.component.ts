import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { DataService } from '../service/data.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-submit-loan',
  templateUrl: './submit-loan.component.html',
  styleUrls: ['./submit-loan.component.css']
})
export class SubmitLoanComponent implements OnInit {
  loanForm: FormGroup;
  loanList: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    var customerDetails = JSON.parse(window.sessionStorage.getItem("customerDetails"));

    this.loanForm = this.formBuilder.group({
      firstname: [customerDetails.givenName, Validators.required],
      lastname: [customerDetails.familyName, Validators.required], 
      jobtitle: [customerDetails.profile.occupation, Validators.required],
      address: [customerDetails.address.streetAddress1 + ", " + customerDetails.address.country + " " + customerDetails.address.postalCode, Validators.required],
      company: ['', Validators.required],
      years: ['', Validators.required],
      phonenumber: [customerDetails.cellphone.phoneNumber, Validators.required],
      accountnumber: [window.sessionStorage.getItem("accountID"), Validators.required],
      description: ['', Validators.required],
      loancategory: ['', Validators.required],
      amount: ['', Validators.required],
      interest: ['', Validators.required],
      duration: ['', Validators.required],
      monthlyinstallment: ['', Validators.required],
    })

    $('.form-group').each((i, e) => {
      $('.form-control', e)
        .focus(function () {
          e.classList.add('not-empty');
        })
        .blur(function () {
          this.value === '' ? e.classList.remove('not-empty') : null;
        })
        ;
    });

    console.log(customerDetails)
    console.log(customerDetails.givenName)
    console.log(customerDetails.familyName)
    console.log(customerDetails.profile.occupation)
    console.log(customerDetails.phone.localNumber)
    // need to get the customer account number as well 

    // this.loanForm.patchValue({"firstname": customerDetails.givenName})
    // this.loanForm.setValue({"lastname": customerDetails.familyName})
    // this.loanForm.setValue({"jobtitle": customerDetails.profile.occupation})
    // this.loanForm.setValue({"phonenumber": customerDetails.phone.localNumber})
  }

  submitLoan() {
    let loanRequest = {
     borrowerAccount: this.loanForm.get("accountnumber").value,
     imgLink: "https://images.financialexpress.com/2018/12/HOME_LOAN_.jpg",
     loanCategory: this.loanForm.get("loancategory").value,
     loanDescription: this.loanForm.get("description").value,
     amount: this.loanForm.get("amount").value,
     interestRate: this.loanForm.get("interest").value,
     duration: this.loanForm.get("duration").value,
     borrowerFirstName: this.loanForm.get("firstname").value,
     borrowerLastName: this.loanForm.get("lastname").value,
     jobTitle: this.loanForm.get("jobtitle").value,
     companyName: this.loanForm.get("company").value,
     yearsInJob: this.loanForm.get("years").value,
     phoneNumber: this.loanForm.get("phonenumber").value,
     address: this.loanForm.get("address").value,
    }
    this.dataService.postLoan(loanRequest).subscribe((data: any) => {
    console.log(data)


    }, error => {
      console.log(error)

    })

    this.dataService.getLoan(loanRequest).subscribe((data: any) => {
      this.loanList = data.LoanInfo;
    })
  }
}
