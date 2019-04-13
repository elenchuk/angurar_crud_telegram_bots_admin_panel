import { Injectable } from '@angular/core';
import { Answers } from './answers';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Categorys} from './categorys';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  answersRef: AngularFireList<any>;    // Reference to Answer data list, its an Observable
  answerRef: AngularFireObject<any>;   // Reference to Answer object, its an Observable too
  categorysRef: AngularFireList<any>;    // Reference to Answer data list, its an Observable
  categoryRef: AngularFireObject<any>;   // Reference to Answer object, its an Observable too
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Answer
  AddAnswer(answer: Answers) {
    this.answersRef.push({
      answer_category: answer.answer_category,
      question: answer.question,
      answer: answer.answer
    });
  }
  // Create Category
  AddCategory(category: Categorys) {
    this.categorysRef.push({
      category_name: category.category_name
    });
  }

  // Fetch Single Answer Object
  GetAnswer(id: string) {
    this.answerRef = this.db.object('aq_db/' + id);
    return this.answerRef;
  }
  // Fetch Single Category Object
  GetCategory(id: string) {
    this.categoryRef = this.db.object('aq_cat_db/' + id);
    return this.categoryRef;
  }

  // Fetch Answers List
  GetAnswersList() {
    this.answersRef = this.db.list('aq_db');
    return this.answersRef;
  }
  // Fetch Categorys List
  GetCategorysList() {
    this.categorysRef = this.db.list('aq_cat_db');
    return this.categorysRef;
  }
  // Update Answer Object
  UpdateAnswer(answer: Answers) {
    this.answerRef.update({
      answer_category: answer.answer_category,
      question: answer.question,
      answer: answer.answer
    });
  }
  // Update Category Object
  UpdateCategory(category: Categorys) {
    this.categoryRef.update({
      category_name: category.category_name
    });
  }
  // Delete Answer Object
  DeleteAnswer(id: string) {
    this.answerRef = this.db.object('aq_db/' + id);
    this.answerRef.remove();
  }
  // Delete Category Object
  DeleteCategory(id: string) {
    this.categoryRef = this.db.object('aq_cat_db/' + id);
    this.categoryRef.remove();
  }
}
