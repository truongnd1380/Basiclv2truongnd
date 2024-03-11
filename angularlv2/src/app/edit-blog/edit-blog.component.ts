import { Component, Input, OnInit } from '@angular/core';
import { List, Categories, Positions, Public, position } from '../../models/listblog';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { ListBlogsServices } from '../services/listblog.services';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  selectedPublic = 0;
  selectVitris: Number[] = [];
  isChecked = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private listBlogsServices: ListBlogsServices,
    private loaction: Location
  ) { }
  ngOnInit() {
    this.getListFromRoute();

  }
  selectOption(id: number) {
    this.list.category = id;
  }


  getListFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.listBlogsServices.getListFromId(id).subscribe(
      list => {
        this.list = list;
        this.checkPublic();
      }
    )

  }

  checkValues(element: any) {
    if (this.list.position?.includes(element)) {
      return true
    } else {
      return false
    }
  }
  a:number;
  checkPublic() {
    if (this.list.public == true) {
      this.a = 0;
    } else {
      this.a = 1;
    }
  }
  onRadioChange(opt:any) {
    // console.log(`Value is: ${opt.target.value}`)
    if(opt.target.value ==0){
      this.list.public = true
    } else {
      this.list.public = false
    }
   }

  selectVitri(checkUncheck: any) {
    if (checkUncheck.target.checked) {
      let aa = Number(checkUncheck.target.value);
      this.list.position?.push(aa);
      this.list.position?.sort();
    } else {
      let i: number = 0;
      this.list.position?.forEach((childObj: any)=> {
        if(childObj == checkUncheck.target.value) {
          this.list.position?.splice(i, 1);
        }
        i++;
     });
    }
  }
  save(): void {
    this.listBlogsServices.editList(this.list).subscribe(() => this.goBack())
  }
  goBack(): void {
    this.loaction.back();
  }
}
