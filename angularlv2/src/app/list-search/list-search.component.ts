import { Component, OnInit, OnChanges } from "@angular/core";
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { ListBlogsServices } from '../services/listblog.services';
import { List, Categories, Positions, Public, position } from '../../models/listblog';

import { tap } from "node:test/reporters";

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrl: './list-search.component.scss'
})
export class ListSearchComponent implements OnInit {
  Lists$: Observable<List[]>;
  Categories=Categories;
  Positions =Positions;
  Public = Public;
  // lists: string = '';
  private searchedSupject = new Subject<string>();

  constructor(private listBlogsServices:ListBlogsServices) {

  }
  search(searchedString:string):void {
    // console.log(`searchedString = ${searchedString}`);
    this.searchedSupject.next(searchedString);
    // this.lists = searchedString;
  }

  ngOnInit() {
    this.test();
  }
  test(){
    this.Lists$ =  this.searchedSupject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchedString:string) => this.listBlogsServices.searchLists(searchedString))
    );
  }

  delete(listsId:number):void{
    this.listBlogsServices.deleteList(listsId).subscribe(
      value => {
        // this.search(this.lists);
         // this.test();
      }
    )
   }
}
