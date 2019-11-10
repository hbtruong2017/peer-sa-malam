import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  requestOTP(header: string) {
    return this.httpClient.post(environment.REQUEST_OTP_URL + header, '');
  }

  loginCustomer(header: string) {
    return this.httpClient.post(environment.LOGIN_CUSTOMER_URL + header, '');
  }

  getCustomerDetails(header: string) {
    return this.httpClient.post(environment.GET_CUSTOMER_DETAILS + header, '');
  }

  getCustomerAccounts(header: string) {
    return this.httpClient.post(environment.GET_CUSTOMER_ACCOUNTS + header, '');
  }

  // added for the new APIs
  getCustomerDetailsFromServer(id: number) {
    return this.httpClient.get(environment.GET_CUSTOMER_URL + id);
  }

  // getLoanDetailsByIdforLoaner(req: any) {
  //   return this.httpClient.get(environment.GET_LOAN_DETAILS_FOR_LOANER_URL + "pending");
  // }

  
  // Home page
  getAllPendingLoans() {
    return this.httpClient.get(environment.GET_ALL_PENDING_LOANS_URL)
  }

  // Loan details page
  getLoanInfoByLoanId(id: number) {
    return this.httpClient.get(environment.GET_LOAN_INFO_BY_LOAN_ID + id)
  }

  postLoan(req: any) {
    return this.httpClient.post(environment.SET_LOAN_URL, req);
  }

  postSubmitLoan(req: any) {
    return this.httpClient.post(environment.SUBMIT_LOAN_URL, req);
  }

  // get will be similar to the post as well 
}
