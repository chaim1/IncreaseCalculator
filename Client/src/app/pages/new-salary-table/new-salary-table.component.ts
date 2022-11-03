import { Component, Input, OnInit } from '@angular/core';
import { PostResult } from 'src/app/core/models/postResult';

@Component({
  selector: 'app-new-salary-table',
  templateUrl: './new-salary-table.component.html',
  styleUrls: ['./new-salary-table.component.scss']
})
export class NewSalaryTableComponent implements OnInit {
  @Input() salaryResult:PostResult[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
