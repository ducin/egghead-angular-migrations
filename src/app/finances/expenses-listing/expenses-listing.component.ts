import { Component, Host, Inject, InjectionToken, Input, Optional, Self, SkipSelf } from '@angular/core';
import { BenefitsService } from 'src/app/api/benefits.service';

import { Expense } from 'src/app/api/dto';
import { EmployeesService } from 'src/app/api/employees.service';
import { ExpensesService } from 'src/app/api/expenses.service';
import { OfficesService } from 'src/app/api/offices.service';
import { ProjectsService } from 'src/app/api/projects.service';
import { SETTINGS_SERVICE_TOKEN, SettingsService } from 'src/app/shared/settings.service';

const DI_TOKEN = new InjectionToken<string>('DI_TOKEN');

@Component({
  selector: 'itcorpo-expenses-listing',
  templateUrl: './expenses-listing.component.html',
  styleUrls: ['./expenses-listing.component.css'],
  providers: [{
    provide: DI_TOKEN,
    useValue: 'some value'
  }]
})
export class ExpensesListingComponent {
  @Input()
  expenses!: Expense[]

  constructor(
    public expensesSvc: ExpensesService,
    @Optional() private benefitsSvc: BenefitsService,
    @Self() private employeesSvc: EmployeesService,
    @SkipSelf() private officesSvc: OfficesService,
    @Host() private projectsSvc: ProjectsService,
    @Inject(DI_TOKEN) private token: string,
    @Inject(SETTINGS_SERVICE_TOKEN) public settingsService: SettingsService,
    // value: string
  ) {}
}