import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private http: HttpClient) {}
 
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    /*const req = new HttpRequest('POST', '/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
*/
    return this.http.post('http://localhost:8080/post', formdata, {
      reportProgress: true,
      responseType: 'text',
      observe: 'events'
    });
      
    //return this.http.request(req);
  }
 
  getFiles(): Observable<any> {
    return this.http.get('/getallfiles')
  }
}
