import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tasks MEAN Project';

  tasks = [];
  error = null;
  showTask = {};
  newTask: any;

  constructor(private _httpService: HttpService){

  }
    ngOnInit() {
      this.getAllTasks()
      this.newTask = { title: "", description: ""}
    }
    // index route:----------------
    getAllTasks() {
      let observable = this._httpService.getAllTasks()

      observable.subscribe(data => {
        this.tasks = data["data"];
        //console.log("TASKS", data.data)    // Can work but not standard in angular/typescript
      })
    }

    // Get One Task Route:--------------
    getOneTask(id: string) {
      let observable = this._httpService.getOneTask(id)
      
      observable.subscribe(data => {
      this.showTask = data['data'];
      console.log("Show one Task", this.showTask);
      });
    }

    // Create New Task Route:
    createTask(){ 
      // let observable = this._httpService.createTask(this.newTask);
      let observable = this._httpService.createTask(this.newTask);
      observable.subscribe(data => {
      console.log ("hello TEST", data)
      this.newTask = { title: "", description: "" }
    });
    }


    // Delete Task route:
    // deleteTask(id: string) {

    // }
    
    
}
