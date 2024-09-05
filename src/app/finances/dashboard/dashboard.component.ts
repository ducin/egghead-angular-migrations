import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';

import { EmployeesService } from 'src/app/api/employees.service';
import { BenefitsService } from 'src/app/api/benefits.service';
import { OfficesService } from 'src/app/api/offices.service';
import { ProjectsService } from 'src/app/api/projects.service';
import { ExpensesService } from 'src/app/api/expenses.service';

import { Observable, of } from 'rxjs';

import { Expense } from 'src/app/api/dto';
import { TableComponent } from '../../shared/components/table/table.component';
import { ExpensesListingComponent } from '../expenses-listing/expenses-listing.component';

@Component({
    selector: 'itcorpo-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true,
    imports: [TableComponent, ExpensesListingComponent, AsyncPipe]
})
export class DashboardComponent implements OnInit {
  private officesSvc = inject(OfficesService);
  private projectsSvc = inject(ProjectsService);
  private employeesSvc = inject(EmployeesService);
  private benefitsSvc = inject(BenefitsService);
  private expensesSvc = inject(ExpensesService);
  private currencyPipe = inject(CurrencyPipe);

  monthlyCost$!: Observable<number>
  yearlyCost$!: Observable<number>

  expenses$!: Observable<Expense[]>

  ngOnInit() {
    this.expenses$ = this.expensesSvc.getExpenses()

    this.monthlyCost$ = of(1234567890)

    this.yearlyCost$ = of(9876543210)
  }


  monthly = 1234567890
  yearly = 9876543210

  table = {
    headers: ['Cost Category', 'Total Monthly Expenses', 'Total Yearly Expenses'],
    rows: [
      [
        'Office Rentals',
        this.currencyPipe.transform(this.monthly, "EUR")!,
        this.currencyPipe.transform(this.yearly, "EUR")!,
      ],
      [
        'Employee Salaries',
        this.currencyPipe.transform(this.monthly, "EUR")!,
        this.currencyPipe.transform(this.yearly, "EUR")!,
      ],
      [
        'Employee Benefits',
        this.currencyPipe.transform(this.monthly, "EUR")!,
        this.currencyPipe.transform(this.yearly, "EUR")!,
      ],
      [
        'Total Expenses',
        this.currencyPipe.transform(this.monthly, "EUR")!,
        this.currencyPipe.transform(this.yearly, "EUR")!,
      ],
    ]
  }

}
