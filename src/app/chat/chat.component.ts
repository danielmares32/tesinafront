import { Component, OnInit } from '@angular/core';
import { Chat } from '../shared/chat';
import { RestApiService } from '../shared/rest-api.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  userName:string='';
  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
    { name: 'Alan Green', title: 'Nurse' },
    { name: 'Lewis Roberts', title: 'Doctor of Medicine' },
    { name: 'Janitor John', title: 'Janitor' },
    { name: 'Harvey Smith', title: 'Doctor of Medicine' },
    { name: 'Ross Sullivan', title: 'Carpenter and photographer' },
    { name: 'Tonny Brown', title: 'Janitor' },
    { name: 'Richard Jones', title: 'Doctor of Medicine' },
    { name: 'Ben Paterson', title: 'Carpenter and photographer' },
    { name: 'Peter Clark', title: 'Nurse' },
    { name: 'Paul Davidson', title: 'Doctor of Medicine' },
  ];
  constructor(private socket: Socket) { }
  ngOnInit(): void {
    this.userName=sessionStorage.getItem('nombre')!;
    this.socket.on('recMessage',(data:Chat)=>{
      console.log(data);
      //this.messages.push(data);
      let reply = (sessionStorage.getItem('email')==data.email) ? false : true;

      //let avatar = (sessionStorage.getItem('email')==data.email) ? 'https://i.gifer.com/no.gif' : 'http://www.reactiongifs.com/r/wnd1.gif';
      this.messages.push({
        text: data.text,
        date: data.createdAt,
        reply: reply,
        user: {
          name: data.email,
          avatar: 'http://www.reactiongifs.com/r/wnd1.gif',
        },
      });
    });
  }
  messages: any[] = [];

  
  sendMessageSocket(message:Chat){
    this.socket.emit('sendMessage', message);
  }

  sendMessage(event: any) {
    this.sendMessageSocket({email:sessionStorage.getItem('email'),text:event.message,createdAt:new Date()} as Chat);

   
  }
  

}
