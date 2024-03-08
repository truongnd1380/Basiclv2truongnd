import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { ChitetComponent } from './chitet/chitet.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { NewBlogComponent } from './new-blog/new-blog.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/list', pathMatch: 'full'
  },
  {
    path: 'list', component: ListBlogsComponent
  },
  {
    path: 'Search', component: ListSearchComponent
  },
  {
    path: 'chitiet/:id', component: ChitetComponent
  },
  {
    path: 'edit/:id', component: EditBlogComponent
  },
  {
    path: 'new', component: NewBlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
