import { Component } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoAdd } from '../../models/todo-add';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  todoForm = new FormGroup({
    content: new FormControl('')
  })

  constructor(private todoService:TodoService, private router:Router) {}


  add()
  {
    this.todoService.add(this.todoForm.value as TodoAdd).subscribe(x=>{

      if(x==true)
      {
        this.router.navigateByUrl("/todos");
      }

    })
  }





}
