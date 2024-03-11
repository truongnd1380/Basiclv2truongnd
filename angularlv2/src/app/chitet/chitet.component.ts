import { Component, Input, OnInit } from '@angular/core';
import { List,Categories } from '../../models/listblog';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { ListBlogsServices } from '../services/listblog.services';
@Component({
  selector: 'app-chitet',
  templateUrl: './chitet.component.html',
  styleUrl: './chitet.component.scss'
})
export class ChitetComponent implements OnInit {
  @Input () list: List;
  Categories=Categories;
  constructor(
    private route: ActivatedRoute,
    private listBlogsServices: ListBlogsServices,
    private loaction:Location
  ){

  }
  ngOnInit() {
    this.getListFromRoute();
  }
  getListFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.listBlogsServices.getListFromId(id).subscribe(
      list => {
        this.list = list;
      }

      )
  }
  goBack():void {
    this.loaction.back();
  }
}
