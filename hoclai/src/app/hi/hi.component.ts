import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrl: './hi.component.scss'
})
export class HiComponent implements OnInit {
  constructor(private _dataService:DataService){

  }
  textFromHello:string;
  ngOnInit(): void {
    this.textFromHello = this._dataService.textFromHello;
  }

}
