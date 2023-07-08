import { Component, Input } from '@angular/core';
import { Book } from '../models/livro';

@Component({
  selector: 'app-product-itemm',
  templateUrl: './product-itemm.component.html',
  styleUrls: ['./product-itemm.component.css']
})
export class ProductItemmComponent {
  url : string = "";

  @Input()
  livro!: Book;

  constructor() {

   }

  ngOnInit(): void {

  }
}
