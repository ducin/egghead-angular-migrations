import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { EmployeeDetailsResolverService } from './employee-details-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./employee-listing/employee-listing.component').then(m => m.EmployeeListingComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./employee-details/employee-details-page.component').then(m => m.EmployeeDetailsPageComponent),
    resolve: {
      employee: EmployeeDetailsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EmployeeDetailsResolverService]
})
export class EmployeesRoutingModule { }
