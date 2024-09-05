import {
  Injectable,
  InjectionToken,
  inject,
} from "@angular/core";
import { ExpensesService } from "../api/expenses.service";

export const SETTINGS_SERVICE_TOKEN = new InjectionToken(
  "SETTINGS SERVICE TOKEN"
);

@Injectable()
export abstract class SettingsService {
  private expensesSvc = inject(ExpensesService);


  get summary(): string {
    return `Some stuff in the settings`;
  }
}
