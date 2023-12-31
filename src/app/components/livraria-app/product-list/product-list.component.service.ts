import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()


export class BooksService {

  private url = 'https://localhost:44382/api/bookstore';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    // getBooks(){
    //     return books;
    // }

    getBooks() {
      return this.http.get(this.url)

  
    }

}