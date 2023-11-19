import { Component, OnInit } from '@angular/core';
import { FriendModel } from './shared/models/friend.model';
import { DeleteHandlerService } from './shared/services/delete-handler.service';
import { FriendsService } from './shared/services/friends.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'angular-event-emitter';

  existingFriend: FriendModel = {
    id: 0,
    givenName: '',
    familyName: ''
  };

  constructor(
    public friendService: FriendsService,
    private deleteHandlerService: DeleteHandlerService
  ) {
  }

  ngOnInit(): void {
  }

  addFriend(newFriend: FriendModel) {
    this.friendService.add(newFriend);
  }

  update(friend: FriendModel) {
    this.existingFriend = friend;
  }

  updateFriend(existingFriend: FriendModel) {
    this.friendService.update(existingFriend);
  }

  delete(friend: FriendModel) {  
      this.deleteHandlerService.handle(this.friendService.delete(friend));
  }

}
