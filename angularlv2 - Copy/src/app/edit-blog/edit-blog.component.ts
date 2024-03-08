import { Component, Input, OnInit } from '@angular/core';
import { List,Categories,Positions,Public } from '../../models/listblog';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { ListBlogsServices } from '../services/listblog.services';
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.scss'
})

export class EditBlogComponent implements OnInit {
  @Input() list: List;
  // Categorie = ["Thời sự","Thế giới", "Kinh doanh","Giải chí","Thể thao"];
  Categories = Categories;
  Positions = Positions;
  Public = Public;

  selectedCategorie: number;
  // selectedPosition: number[];
  // selectedPublic: boolean;
  constructor(
    private route: ActivatedRoute,
    private listBlogsServices: ListBlogsServices,
    private loaction: Location
  ) { }
  ngOnInit() {
    this.getListFromRoute();
  }
  getListFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.listBlogsServices.getListFromId(id).subscribe(
      list => {
        this.list = list;
        this.selectedCategorie = this.list.category;
        // this.selectedPublic = this.list.public;
      }
    )

  }
  save(): void {
    this.listBlogsServices.editList(this.list).subscribe(() => this.goBack())
  }
  goBack(): void {
    this.loaction.back();
  }
}
