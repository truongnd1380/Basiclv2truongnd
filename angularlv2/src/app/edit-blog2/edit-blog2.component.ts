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
  selector: 'app-edit-blog2',
  templateUrl: './edit-blog2.component.html',
  styleUrl: './edit-blog2.component.scss'
})
export class EditBlog2Component implements OnInit, OnChanges {
  @Input() list: List;
  newList: List[];
  CategoriesA = Categories;
  PositionsA = Positions;
  PublicA = Public;
  newFormGroup: FormGroup;
  radiocheck=0;
  getListFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.listBlogsServices.getListFromId(id).subscribe(
      list => {
        this.list = list;

        this.newFormGroup = this.formBuilder.group({
          title: [this.list.title, []],
          des: [this.list.des, []],
          detail: [this.list.detail, []],
          thumbs: [this.list.thumbs, []],
          Categories: [this.list.category, []],
          Positions: this.formBuilder.array([]),
          public: [this.list.public, Validators.required],
          datepublic: [this.list.data_pubblic, []],
        });
        this.addCheck();
      }
    )
  }
  // this.list.title
  ngOnInit() {
    this.getListFromRoute();
  }
  get Positions() {
    return this.newFormGroup.get('Positions') as FormArray;
  }

  addCheck() {
    for (let index = 0; index < this.PositionsA.length; index++) {
      let index1 = index;
      let xfalse = false;
      for (let index = 0; index < this.list.position.length; index++) {
        const element = this.list.position[index];
        if(element == index1){
          xfalse = true;
        }
      }
      this.Positions.push(this.formBuilder.control(xfalse));
      xfalse = false;
    };
  }

  test() {
    console.warn(this.newFormGroup.value.public);
    this.list.title = this.newFormGroup.value.title!;
    this.list.des = this.newFormGroup.value.des!;
    this.list.detail = this.newFormGroup.value.detail!;
    this.list.thumbs = this.newFormGroup.value.thumbs!;
    this.list.category = this.newFormGroup.value.Categories!;
    this.list.position = [];
    for (let i = 0; i < this.Positions.controls.length; i++) {
      if (this.Positions.controls[i].value == true) {
        this.list.position.push(i);
      }
    }
    if (Number(this.newFormGroup.value.public) == 0) {
      this.list.public = true;
    } else {
      this.list.public = false;
    }
    this.list.data_pubblic = this.newFormGroup.value.datepublic!;
    this.listBlogsServices.editList(this.list).subscribe(() => this.goBack())
  }
  goBack(): void {
    this.loaction.back();
  }
  constructor(
    private route: ActivatedRoute,
    private listBlogsServices: ListBlogsServices,
    private loaction: Location,
    private formBuilder: FormBuilder,
  ) { }


  ngOnChanges(changes: SimpleChanges): void {
  }
}
