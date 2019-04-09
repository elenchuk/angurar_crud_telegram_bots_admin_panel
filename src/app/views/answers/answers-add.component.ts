import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
// import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';


@Component({
  selector: 'app-answers-add',
  templateUrl: './answers-add.component.html',
  styleUrls: ['./answers-add.component.css']
})

export class AnswersAddComponent implements OnInit {

  public answerForm: FormGroup;  // Define FormGroup to answer's form
  private toasterService: ToasterService;

  public toasterconfig: ToasterConfig =
    new ToasterConfig({
      tapToDismiss: true,
      timeout: 5000
    });

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    toasterService: ToasterService,
    // public toastr: ToastrService  // Toastr service for alert message
  ) { this.toasterService = toasterService; }


  ngOnInit() {
    this.crudApi.GetAnswersList();  // Call GetAnswersList() before main form is being called
    this.studenForm();              // Call answer form when component is ready
  }

  // Reactive answer form
  studenForm() {
    this.answerForm = this.fb.group({
      answer_category: ['', [Validators.required, Validators.minLength(1)]],
      question: ['', [Validators.required, Validators.minLength(1)]],
      answer: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  // Accessing form control using getters
  get answer_category() {
    return this.answerForm.get('answer_category');
  }
  get question() {
    return this.answerForm.get('question');
  }

  get answer() {
    return this.answerForm.get('answer');
  }

  // Reset answer form's values
  ResetForm() {
    this.answerForm.reset();
  }

  submitAnswerData() {
    this.crudApi.AddAnswer(this.answerForm.value); // Submit answer data using CRUD API
    // this.toastr.success(this.answerForm.controls['question'].value + ' - successfully added!'); // Show success message when data is successfully submited
    this.toasterService.pop('success', 'Success', 'Answer' + this.answerForm.controls['question'].value + ' - successfully added!');
    this.ResetForm();  // Reset form when clicked on reset button
  }

}
