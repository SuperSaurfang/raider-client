import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Message, SocketService, RestService, ChatRoom } from '../core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, OnDestroy {

  public faShare = faShare;
  public messageForm: FormGroup;
  public messages: Message[] = [];
  public chatName: string;
  public displayName: string;
  public chatlist: ChatRoom[] = [];

  private subcription: Subscription;

  constructor(private formBuilder: FormBuilder, private socketService: SocketService,
              private route: ActivatedRoute, private restService: RestService, private router: Router) {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required],
    });
    this.displayName = localStorage.getItem('user');
  }

  ngOnInit() {
    this.chatName = this.route.snapshot.paramMap.get('chatname');
    this.socketService.enterChat(this.chatName);
    this.restService.getMessages(this.chatName).subscribe(response => {
      if (response.code === 200) {
        response.data.forEach((message) => {
          message.messageDate = new Date(message.messageDate);
          this.messages.push(message);
        });
      }
    });
    this.subcription = this.socketService.recieveMessage().subscribe(data => {
      data.messageDate = new Date(data.messageDate);
      this.messages.push(data);
    });
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
    this.socketService.disconnect();
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    const message = new Message(new Date(), this.displayName, this.messageForm.value.message, this.chatName);
    this.socketService.sendMessage(message);
    this.messages.push(message);
    this.messageForm.reset();
  }

  public logout(): void {
    this.restService.logout();
    this.router.navigate(['']);
  }

  public updateList(): void {
    this.restService.getChatList().subscribe(response => {
      if (response.code === 200) {
        this.chatlist = [];
        response.data.forEach((chatroom) => {
          this.chatlist.push(chatroom);
        });
      }
    });
  }
}
