import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  title: string | undefined;
  todo: string[];
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      add: ''
    });

    this.todo = [];
   }


  ngOnInit(): void {
    this.title = "To Do App";
  }

  onSubmit() {
    var item = this.formGroup.controls['add'].value;

    this.todo.push(item);

    this.formGroup.reset();
  }


}
