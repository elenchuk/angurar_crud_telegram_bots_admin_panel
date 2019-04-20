import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';  // CRUD API service class
import { Projects } from '../../shared/projects';


@Component({
  selector: 'app-projectsdb',
  templateUrl: './projectsdb.component.html',
  styleUrls: ['./projectsdb.component.css']
})

export class ProjectsdbComponent implements OnInit {
  p = 1;                      // Fix for AOT compilation error for NGX pagination
  Project: Projects[];                 // Save projects data in Project's array.
  hideWhenNoProject = false; // Hide projects data table when no project.
  noData = false;            // Showing No Project Message, when no projects in database.
  preLoader = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)

  constructor(
    public crudApi: CrudService, // Inject answer CRUD services in constructor.
    ) { }


  ngOnInit() {
    this.dataState(); // Initialize project's list, when component is ready
    let s = this.crudApi.GetProjectsList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Project = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Project.push(a as Projects);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of answers data. It updates the state of hideWhenNoAnswer, noData & preLoader variables when any changes occurs in answer data list in real-time.
  dataState() {
    this.crudApi.GetProjectsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoProject = false;
        this.noData = true;
      } else {
        this.hideWhenNoProject = true;
        this.noData = false;
      }
    })
  }

  // Method to delete answer object
  deleteProject(project) {
    if (window.confirm('Are sure you want to delete this project ?')) { // Asking from user before Deleting project data.
      this.crudApi.DeleteProject(project.$key) // Using Delete project API to delete project.
      // this.toastr.success(answer.firstName + ' successfully deleted!'); // Alert message will show up when answer successfully deleted.
    }
  }

}
