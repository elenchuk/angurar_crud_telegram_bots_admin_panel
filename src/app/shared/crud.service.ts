import { Injectable } from '@angular/core';
import { Answers } from './answers';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  answersRef: AngularFireList<any>;    // Reference to Answer data list, its an Observable
  answerRef: AngularFireObject<any>;   // Reference to Answer object, its an Observable too
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

  // Fetch Single Answer Object
  GetAnswer(id: string) {
    this.answerRef = this.db.object('answersdb/' + id);
    return this.answerRef;
  }

  // Fetch Answers List
  GetAnswersList() {
    this.answersRef = this.db.list('answersdb');
    return this.answersRef;
  }
  // Update Answer Object
  UpdateAnswer(answer: Answers) {
    this.answerRef.update({
      answer_category: answer.answer_category,
      question: answer.question,
      answer: answer.answer
    });
  }
  // Delete Answer Object
  DeleteAnswer(id: string) {
    this.answerRef = this.db.object('answersdb/' + id);
    this.answerRef.remove();
  }
}
