import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less']
})
export class TodolistComponent  {

  addItem: string = '';

  todoList: string[] = [
    '学习Typescript',
    '学习Angular'
  ];

  add2List(addItem: string) {
    this.todoList.push(addItem);
  }

}
