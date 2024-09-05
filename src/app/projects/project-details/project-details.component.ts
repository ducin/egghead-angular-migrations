import { Component, Input } from '@angular/core';
import { Project } from 'src/app/api/dto';
import { projectImageUrl } from './project-image';
import { ImageComponent } from '../../shared/components/image/image.component';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'itcorpo-project-details',
    templateUrl: './project-details.component.html',
    standalone: true,
    imports: [ImageComponent, CurrencyPipe, DatePipe]
})
export class ProjectDetailsComponent {
  @Input()
  project!: Project

  url(){
    return projectImageUrl(this.project)
  }
}
