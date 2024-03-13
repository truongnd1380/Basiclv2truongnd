import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { List, Categories, Positions, Public, position } from '../../models/listblog';
import { ActivatedRoute } from '@angular/router';
import { Location, formatDate } from "@angular/common";
import { ListBlogsServices } from '../services/listblog.services';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
[x: string]: any;
  @Input() list: List;
  // newList: List[];

  CategoriesA = Categories;
  PositionsA = Positions;
  PublicA = Public;
  defaultpositions = ["Việt Nam", "Châu Á"];
  defaultpositionsRadio =['Yes'];

  newFormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(20)]],
    des: ['', []],
    detail: ['', []],
    thumbs: ['', []],
    Categories: [0, []],
    // positions: this.formBuilder.array([]),
    positions: this.formBuilder.array(this.PositionsA.map(x => this.defaultpositions.indexOf(x.label) > -1)),
    public: [true, [] ],
    // public: this.formBuilder.array(this.PublicA.map(y => this.defaultpositionsRadio.indexOf(y.label) > -1)),
    datepublic: ['2019-06-28', []],
  })
  get Public() {
    return this.newFormGroup.get('public');
  }
  get Categories() {
    return this.newFormGroup.get('Categories');
  }
  get title() {
    return this.newFormGroup.get('title');
  }
  get Positions() {
    return this.newFormGroup.get('positions') as FormArray;

  }

  // addAlias() {
  //   for (let index = 0; index < this.PositionsA.length; index++) {
  //     if(index == 0){
  //       this.Positions.push(this.formBuilder.control(true));
  //     } else{
  //       this.Positions.push(this.formBuilder.control(false));
  //     }

  //   };
  // }
  test() {
    console.warn(this.newFormGroup.value.public);

    const newList: List = new List();

    newList.title = this.newFormGroup.value.title!;
    newList.des = this.newFormGroup.value.des!;
    newList.detail = this.newFormGroup.value.detail!;
    newList.thumbs = this.newFormGroup.value.thumbs!;
    newList.category = this.newFormGroup.value.Categories!;
    newList.position = [];
    for (let i = 0; i < this.Positions.controls.length; i++) {
      if (this.Positions.controls[i].value == true) {
        newList.position.push(i);
      }
    }
    if (Number(this.newFormGroup.value.public) == 0) {
      newList.public = true;
    } else {
      newList.public = false;
    }
    newList.data_pubblic = this.newFormGroup.value.datepublic!;
    this.listBlogsServices.addBlog(newList).subscribe()
  }
  goBack(): void {
    this.loaction.back();
  }
  onSubmit():void{
    this.test()
  }
  constructor(
    private route: ActivatedRoute,
    private listBlogsServices: ListBlogsServices,
    private loaction: Location,
    private formBuilder: FormBuilder = new FormBuilder,
  ) { }
  ngOnInit() {
    // this.addAlias();
    // this.addPublic();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
