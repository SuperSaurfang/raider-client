import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as io from 'socket.io-client';
import { Message } from '../classes';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private connection: SocketIOClient.Socket;
  constructor() {
    this.connection = io.connect(environment.socketUrl);
  }

  public enterChat(chatroom: string) {
    if (this.connection.disconnected) {
      this.connection.open();
    }
    this.connection.emit('enterChatRoom', chatroom);
  }

  public disconnect(): void {
    this.connection.disconnect();
  }

  public sendMessage(data: Message) {
    this.connection.emit('requestMessage', data);
  }

  public recieveMessage(): Observable<Message> {
    return Observable.create((observer: Observer<Message>) => {
      this.connection.on('responseMessage', (data: Message) => {
        observer.next(data);
      });
    });
  }
}
