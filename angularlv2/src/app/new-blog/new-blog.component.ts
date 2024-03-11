import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { List, Categories, Positions, Public, position } from '../../models/listblog';
import { ActivatedRoute } from '@angular/router';
import { Location, formatDate } from "@angular/common";
import { ListBlogsServices } from '../services/listblog.services';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.scss'
})
export class NewBlogComponent implements OnInit, OnChanges {
  @Input() list: List;
  // Categorie = ["Thời sự","Thế giới", "Kinh doanh","Giải chí","Thể thao"];
  newFormGroup: FormGroup;
  //..................
  CategoriesA = Categories;
  PositionsA = Positions;
  PublicA = Public;
  aaaa: boolean;
  selectedCategorie: number;
  // selectedPosition: number[];
  selectedPublic = 0;

  vitri: any = [];
  trangthai: any = [];

  constructor(
    private route: ActivatedRoute,
    private listBlogsServices: ListBlogsServices,
    private loaction: Location,
    private formBuilder: FormBuilder = new FormBuilder,
  ) { }


  // taoform() {
  //   this.newFormGroup = this.formBuilder.group({
  //     name: ['', [Validators.required, Validators.minLength(4)]],
  //     des: ['', []],
  //     detail: ['', []],
  //     thumbs: ['', []],
  //     Categories: ['', []],
  //     // Positions: [this.vitri, []],
  //     // public: [this.trangthai, []],
  //     Positions: [, []],
  //     public: [, []],
  //     datepublic: ['', []],
  //   })
  // }
  ngOnInit() {
    // this.getListFromRoute();
    // this.taoform();
    // console.log(this.listBlogsServices.listBlogURL_length)
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  // listBlogsServices.length + 1
  newList: List[]
  // A = Number(this.listBlogsServices.listBlogURL_length) + 1;
   // add new movie
  //  fname.value,fdes.value,fdetail.value,fthumbs.value,fCategories.value,datepublic.value
   add(fname:string, fdes:string,fdetail:string,fthumbs:string,fCategories:string,fdatepublic:string):void {
    fname = fname.trim();//cắt khoảng chống đầu cuối
    const newBlog:List  = new List();
    newBlog.title = fname;
    newBlog.des = fdes;
    newBlog.detail = fdetail;
    newBlog.thumbs = fthumbs;
    newBlog.category = Number(fCategories);
    newBlog.data_pubblic = fdatepublic;

    this.listBlogsServices.addBlog(newBlog).subscribe(
      insertedBlogs => {
        this.newList.push(insertedBlogs)
      }
    )
   }
}
