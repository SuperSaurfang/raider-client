import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService, ChatRoom } from '../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.scss']
})
export class ChatlistComponent implements OnInit {

  public createChatRoomForm: FormGroup;
  public chatList: ChatRoom[] = [];
  public displayName: string;
  constructor(private formBuilder: FormBuilder, private restService: RestService, private router: Router) {
    this.createChatRoomForm = this.formBuilder.group({
      chatname: ['', Validators]
    });
    this.displayName = localStorage.getItem('user');
  }

  ngOnInit() {
    this.restService.getChatList().subscribe(response => {
      if (response.code === 200 && Array.isArray(response.data)) {
        response.data.forEach(chatRoom => {
          this.chatList.push(chatRoom);
        });
      }
    });
  }

  public logout() {
    this.restService.logout();
    this.router.navigate(['start']);
  }

  public onSubmit(event: Event) {
    this.router.navigate(['chatroom/' + this.createChatRoomForm.value.chatname]);
  }

}
