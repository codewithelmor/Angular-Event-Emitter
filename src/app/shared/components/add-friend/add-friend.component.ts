import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendModel } from '../../models/friend.model';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrl: './add-friend.component.css'
})
export class AddFriendComponent implements OnInit {

  @Output()
  addFriend: EventEmitter<FriendModel> = new EventEmitter<FriendModel>();

  addForm = new FormGroup({
    givenName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    familyName: new FormControl('', [Validators.required, Validators.maxLength(20)])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  close() {
    this.addForm.reset();
    this.addForm = new FormGroup({
      givenName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      familyName: new FormControl('', [Validators.required, Validators.maxLength(20)])
    });    
  }

  save() {
    let friend = this.addForm.value as FriendModel;
    friend = { ...friend, id: 0 };
    this.addFriend.emit(friend);
    this.close();    
    let element: HTMLElement = document.querySelector('#addModal .btn-close') as HTMLElement;
    element.click();
  }

}
