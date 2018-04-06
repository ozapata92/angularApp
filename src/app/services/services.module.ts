import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BookService } from './book.services';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    BookService
  ]
})
export class ServicesModule { }
