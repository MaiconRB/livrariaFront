import { Component } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  livros : any;
  bookService : BooksService

  constructor( bookService : BooksService)
  {
    this.bookService = bookService;
  }

  ngOnInit(): void {

    this.livros = this.bookService.getBooks().subscribe((data =>{
      this.livros = data;
      console.log(this.livros);
    }))
  }

}
