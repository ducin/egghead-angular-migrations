import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from './config';
import { Expense } from 'src/app/api/dto';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private http = inject(HttpClient);


  getExpenses() {
    return this.http.get<Expense[]>(`${apiURL}/finances/expenses`)
  }
}
