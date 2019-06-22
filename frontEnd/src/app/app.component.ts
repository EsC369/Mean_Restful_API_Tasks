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

    // Create New Task Route:---------------
    createTask() { 
      // let observable = this._httpService.createTask(this.newTask);
      let observable = this._httpService.createTask(this.newTask);
      observable.subscribe(data => {
      this.newTask = { title: "", description: "" }
      this.getAllTasks();
    });
    }

    // Update Task Route:-------------------
    updateTask(id: string) {
      let observable = this._httpService.updateTask(this.showTask);
      observable.subscribe(data => {
        this.showTask = {title: "", description: ""};
        console.log("Successfully updated!");

        // Rediret to root:
        this.getAllTasks();
      });
    }

    // Cancel/Reset Route:---------------
    cancelEdit() {
      this.showTask = {title: "", description: ""}
    }

    // Delete Task route: --------------------
    deleteTask(id: string) {
      let observable = this._httpService.deleteTask(id);
      observable.subscribe(data => {
        this.showTask = {title: "", description: ""};
        console.log("Successfully Deleted!");

        // Redirect to Root:
        this.getAllTasks();
      });
    }
    
}
