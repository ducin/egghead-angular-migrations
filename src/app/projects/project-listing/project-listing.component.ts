import { Component, OnInit, inject } from '@angular/core';
import { ProjectsService } from 'src/app/api/projects.service';

import { Observable } from 'rxjs';

import { Project } from 'src/app/api/dto';

@Component({
  selector: 'itcorpo-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent implements OnInit {
  private projectSvc = inject(ProjectsService);

  projects$!: Observable<Project[]>

  ngOnInit() {
    this.projects$ = this.projectSvc.getAllProjects()
  }

}
