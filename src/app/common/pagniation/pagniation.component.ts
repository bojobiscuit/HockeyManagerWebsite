import { Component, OnInit, Input } from '@angular/core';
import { Pagination } from 'src/app/dtos/pagination';

@Component({
  selector: 'pagniation',
  templateUrl: './pagniation.component.html',
  styleUrls: ['./pagniation.component.scss']
})
export class PagniationComponent implements OnInit {

  @Input() pagination: Pagination;

  constructor() { }

  ngOnInit() {
  }

}
