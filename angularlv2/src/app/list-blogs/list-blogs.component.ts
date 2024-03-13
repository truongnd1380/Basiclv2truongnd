import { Component, OnInit } from '@angular/core';
import { ListBlogsServices } from '../services/listblog.services';
import { List, Categories, Positions, Public, position } from '../../models/listblog';
@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrl: './list-blogs.component.scss'
})
export class ListBlogsComponent implements OnInit {
  page:number = 1;
  lists: List[];
  Categories = Categories;
  Positions = Positions;
  Public = Public;
  constructor(private listBlogsServices: ListBlogsServices) {

  }
  getMoviesFromService(): void {
    this.listBlogsServices.getListsBlog().subscribe(
      (updatedLists) => {
        this.lists = updatedLists;
        console.log(`this.movies = ${JSON.stringify(this.lists)}`)
      }
    )
  }
  delete(listsId: number): void {
    this.listBlogsServices.deleteList(listsId).subscribe(
      _ => {
        this.lists = this.lists.filter(eachList => eachList.id !== listsId);
      }
    );
  }
  ngOnInit() {
    this.getMoviesFromService();
  }

}
