import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

// import components
import { ProjectsComponent} from './projects.component';
import { ProjectsdbComponent } from './projectsdb.component';
import { ProjectsAddComponent } from './projects-add.component';
import { EditProjectComponent } from './edit-project.component';

// Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';

// Notifications
import { ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';


// Components Routing
import { ProjectsRoutingModule} from './projects-routing.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    [CommonModule],
    NgxPaginationModule,  // NGX pagination module
    ReactiveFormsModule,        // Reactive forms module
    ToasterModule.forRoot()
  ],
  declarations: [
    ProjectsComponent,
    ProjectsdbComponent,
    ProjectsAddComponent,
    EditProjectComponent
  ]
})
export class ProjectsModule { }
