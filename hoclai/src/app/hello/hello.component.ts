import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent implements OnInit {
  ngOnInit(): void {
this._dataService.setTextFromHello(this.title)
  }
  title: string = 'Property Binding';

  imagesrc = 'https://img.freepik.com/free-photo/floating-island-surrounded-by-fluffy-clouds-beautiful-sunset-chinese-building-generative-ai_206725-750.jpg?w=740&t=st=1709710650~exp=1709711250~hmac=82b11d66ca712789925c6a51a78e9b827f5bf11f00f3313d12d6c2f396406a90'
  withBorder = false;
  onbtnClick() {
    console.log('obbtnClick');
    this.withBorder = !this.withBorder;

  }
  constructor(private _dataService:DataService) {
  }
}
