import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private hc:HttpClient) { 

  }

  addtask(data:any): Observable<any>{
    return this.hc.post('https://vasu.wantcode.dev/Tasadd/',data)
  }
  gettaskList(): Observable<any>{
    return this.hc.get('https://vasu.wantcode.dev/Tasadd/')
  }
  updateList(id: number,data: any): Observable<any>{
    return this.hc.put(`https://vasu.wantcode.dev/Tasadd/${id}`,data);
  }
  deletetask(id: number): Observable<any>{
    return this.hc.delete(`https://vasu.wantcode.dev/Tasadd/${id}`);
  }
}



// addtask(data:any): Observable<any>{
//   return this.hc.post('http://localhost:3000/Taskadd',data)
// }
// gettaskList(): Observable<any>{
//   return this.hc.get('http://localhost:3000/Taskadd')
// }
// updateList(id: number,data: any): Observable<any>{
//   return this.hc.put(`http://localhost:3000/Taskadd/${id}`,data);
// }
// deletetask(id: number): Observable<any>{
//   return this.hc.delete(`http://localhost:3000/Taskadd/${id}`);
// }