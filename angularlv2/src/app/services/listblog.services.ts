import { Injectable } from "@angular/core";
import { List } from "../../models/listblog";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ListBlogsServices {
  private listBlogURL = 'https://65e03377d3db23f7624895f6.mockapi.io/aaa/blog';
  // private listBlogURL = 'http://localhost:3000/blogs';

  getListsBlog(): Observable<List[]> {
    return this.http.get<List[]>(this.listBlogURL).pipe(
      tap(receivedlistBlog => console.log(`receivedMovie = ${JSON.stringify(receivedlistBlog)}`)),
      catchError(error => of([]))
    )

  }
  getListFromId(id: number): Observable<List> {
    const url = `${this.listBlogURL}/${id}`;
    return this.http.get<List>(url).pipe(
      tap(selectedList => console.log(`selected List = ${JSON.stringify(selectedList)}`)),
      catchError(error => of(new List()))
    )

  }
  searchLists(typedString: string): Observable<List[]> {
    if (!typedString.trim()) {
      return of([]);
    }
    // name_like
    // ?search
    return this.http.get<List[]>(`${this.listBlogURL}?search=${typedString}`).pipe(
      tap(
        foundedBlog => console.log(`founded Blog = ${JSON.stringify(foundedBlog)}`)
      ),
      catchError(
        error => of([])
      )
    )
  }
  deleteList(listId: number): Observable<List | null> {
    const url = `${this.listBlogURL}/${listId}`;
    return this.http.delete<List>(url, httpOptions).pipe(
      tap(_ => console.log(`Delete movie with id = ${listId}`)),
      catchError(error => of(null))
    );
  }
  editList(list: List): Observable<any> {
    return this.http.put(`${this.listBlogURL}/${list.id}`, list, httpOptions).pipe(
      catchError(error => of(new List()))
    )
  }
  addBlog(newBlog: List):Observable<List>{
    return this.http.post<List>(this.listBlogURL, newBlog, httpOptions).pipe(
      tap((list:List) => console.log(`inserted newBlog = ${JSON.stringify(list)}`)),
      catchError(error => of(new List()))
    )
  }
  constructor(
    private http: HttpClient,
  ) {
  }
}

// export const Categories = [
//   { id: 0, label: "Thời sự" },
//   { id: 1, label: "Thế giới" },
//   { id: 2, label: "Kinh doanh" },
//   { id: 3, label: "Giải chí" },
//   { id: 4, label: "Thể thao" },
//   { id: 5, label: "Thể thao 1" },
//   { id: 6, label: "Thể thao 2" },
//   { id: 7, label: "Thể thao 3" },
//   { id: 8, label: "Thể thao 4" },
//   { id: 9, label: "Thể thao 5" },
//   { id: 10, label: "Thể thao 6" },
//   { id: 11, label: "Thể thao 7" },
//   { id: 12, label: "Thể thao 8" },
// ]
// export const Positions = [
//   { id: 0, label: "Việt Nam" },
//   { id: 1, label: "Châu Á" },
//   { id: 2, label: "Châu Âu" },
//   { id: 3, label: "Châu Mỹ" }
// ]
// export const Public = [
//   { id: 0, label: "Yes" },
//   { id: 1, label: "No" },
// ]
