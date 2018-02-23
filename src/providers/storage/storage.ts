import { Injectable } from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
    
  }

  public saveInStorage(value: string): void {
    const key = this.nextKey();
    this.storage.setItem(key, value);
  }

  public retrieveFromStorage(key: string): string {
    return this.storage.getItem(key);
  }

  public deleteFromStorage(key: string): void {
    this.storage.removeItem(key);
  }

  private nextKey(): string {
    let lastIndex = 1;
    let key = 'ex';
    if (localStorage.getItem('lastIndex') !== undefined) {
      lastIndex = Number.parseInt(localStorage.getItem('lastIndex')) + 1;
    }

    key = key.concat(lastIndex.toString());
    localStorage.setItem('lastIndex', lastIndex.toString());

    return key;
  }
}
