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
  getCustomer(req: any) {
    return this.httpClient.post(environment.GET_CUSTOMER_URL, req);
  }

  getLoan(req: any) {
    return this.httpClient.post(environment.GET_LOAN_URL, req);
  }

  postLoan(req: any) {
    return this.httpClient.post(environment.SET_LOAN_URL, req);
  }

  postSubmitLoan(req: any) {
    return this.httpClient.post(environment.SUBMIT_LOAN_URL, req);
  }

  // get will be similar to the post as well 
}
