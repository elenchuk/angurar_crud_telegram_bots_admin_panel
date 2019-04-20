import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsdbComponent} from './projectsdb.component';
import { ProjectsAddComponent } from './projects-add.component';
import { EditProjectComponent} from './edit-project.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projects'
    },
    children: [
      {
        path: 'projectslist',
        component: ProjectsdbComponent,
        data: {
          title: 'Projects List'
        }
      },
      {
        path: 'projectadd',
        component: ProjectsAddComponent,
        data: {
          title: 'Project Add'
        }
      },
      {
        path: 'projectslist/:id',
        component: EditProjectComponent,
        data: {
          title: 'Project Edit'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
