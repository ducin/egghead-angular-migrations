import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { NEVER, Observable } from 'rxjs';

import { EmployeesService } from '../api/employees.service';
import { Employee } from 'src/app/api/dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsResolverService  {
  private employeeSvc = inject(EmployeesService);


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee | void> {
    const id = route.paramMap.get('id')
    if (id){
      return this.employeeSvc.getEmployee(parseInt(id))
    } else {
      return NEVER
    }
  }
}
