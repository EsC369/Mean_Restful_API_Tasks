import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  constructor(private _http: HttpClient){
    // Testing route:
    // let id = "5d0aa3690e006757042dfda0";
    // this.getOneTask(id);
      // this.getTasks();
  }

  getAllTasks() {
    return this._http.get("/api/tasks");
  }

  getOneTask(id: string) {
    return this._http.get(`/api/tasks/${id}`);
  }

  createTask(newTask) {
    return this._http.post("/api/tasks/create", newTask);
  }

  updateTask(updatedTask) {
    return this._http.put(`/api/tasks/${updatedTask._id}`, updatedTask);
  }

  deleteTask(id: string) {
    return this._http.delete(`/api/tasks/${id}/delete`, {});
  }


}



