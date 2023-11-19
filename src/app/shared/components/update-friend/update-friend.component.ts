import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendModel } from '../../models/friend.model';

@Component({
  selector: 'app-update-friend',
  templateUrl: './update-friend.component.html',
  styleUrl: './update-friend.component.css'
})
export class UpdateFriendComponent implements OnInit, OnChanges {

  @Input()
  existingFriend: FriendModel= {
    id: 0,
    givenName: '',
    familyName: ''
  };

  @Output()
  updateFriend: EventEmitter<FriendModel> = new EventEmitter<FriendModel>();

  updateForm = new FormGroup({
    id: new FormControl(0, [Validators.required, Validators.min(1)]),    
    givenName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    familyName: new FormControl('', [Validators.required, Validators.maxLength(20)])
  });

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateForm = new FormGroup({
      id: new FormControl(this.existingFriend.id, [Validators.required, Validators.min(1)]),    
      givenName: new FormControl(this.existingFriend.givenName, [Validators.required, Validators.maxLength(20)]),
      familyName: new FormControl(this.existingFriend.familyName, [Validators.required, Validators.maxLength(20)])
    });
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(0, [Validators.required, Validators.min(1)]),    
      givenName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      familyName: new FormControl('', [Validators.required, Validators.maxLength(20)])
    });    
  }

  close() {
    this.updateForm.reset();
    this.updateForm = new FormGroup({
      id: new FormControl(this.existingFriend.id, [Validators.required, Validators.min(1)]),    
      givenName: new FormControl(this.existingFriend.givenName, [Validators.required, Validators.maxLength(20)]),
      familyName: new FormControl(this.existingFriend.familyName, [Validators.required, Validators.maxLength(20)])
    });    
  }

  save() {
    const friend = this.updateForm.value as FriendModel;
    this.updateFriend.emit(friend);
    this.close();
    let element: HTMLElement = document.querySelector('#updateModal .btn-close') as HTMLElement;
    element.click();
  }

}