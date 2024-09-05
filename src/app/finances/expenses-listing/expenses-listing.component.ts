import { Component, InjectionToken, Input, inject } from '@angular/core';
import { BenefitsService } from 'src/app/api/benefits.service';

import { Expense } from 'src/app/api/dto';
import { EmployeesService } from 'src/app/api/employees.service';
import { ExpensesService } from 'src/app/api/expenses.service';
import { OfficesService } from 'src/app/api/offices.service';
import { ProjectsService } from 'src/app/api/projects.service';
import { SETTINGS_SERVICE_TOKEN, SettingsService } from 'src/app/shared/settings.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

const DI_TOKEN = new InjectionToken<string>('DI_TOKEN');

@Component({
    selector: 'itcorpo-expenses-listing',
    templateUrl: './expenses-listing.component.html',
    styleUrls: ['./expenses-listing.component.css'],
    providers: [{
            provide: DI_TOKEN,
            useValue: 'some value'
        }],
    standalone: true,
    imports: [CurrencyPipe, DatePipe]
})
export class ExpensesListingComponent {
  expensesSvc = inject(ExpensesService);
  private benefitsSvc = inject(BenefitsService, { optional: true });
  private employeesSvc = inject(EmployeesService, { self: true });
  private officesSvc = inject(OfficesService, { skipSelf: true });
  private projectsSvc = inject(ProjectsService, { host: true });
  private token = inject(DI_TOKEN);
  settingsService = inject<SettingsService>(SETTINGS_SERVICE_TOKEN);

  @Input()
  expenses!: Expense[]
}