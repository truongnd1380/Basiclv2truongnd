import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
Storage: Storage;
  constructor() {
    this.Storage = window.localStorage;
   }
}
