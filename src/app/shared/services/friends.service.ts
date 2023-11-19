import { Injectable } from '@angular/core';
import { findIndex } from 'lodash';
import { Observable, Observer } from 'rxjs';
import { FriendModel } from '../models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  public friends: FriendModel[] = [];

  constructor() { 
    this.friends.push({
      id: 1,
      givenName: 'John',
      familyName: 'Doe'
    });
    this.friends.push({
      id: 2,
      givenName: 'Jane',
      familyName: 'Doe'
    });
  }

  list() : FriendModel[] {
    return this.friends;
  }

  add(friend: FriendModel) {
    let id = this.friends.length + 1;
    friend.id = id;
    this.friends.push(friend);
  }

  update(friend: FriendModel) {
    let index = findIndex(this.friends, (f) => f.id === friend.id);
    this.friends[index] = friend;
  }

  delete(friend: FriendModel): Observable<FriendModel> {
    const deleteObservable = new Observable<FriendModel>((observer: Observer<FriendModel>) => {

      let index = findIndex(this.friends, (f) => f.id === friend.id);
      this.friends.splice(index, 1);      

      // Emit values to the observer
      observer.next(friend);
  
      // Complete the observable
      observer.complete();
    });

    return deleteObservable;
  }

}
