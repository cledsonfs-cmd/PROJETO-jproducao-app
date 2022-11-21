import { Component, OnInit } from '@angular/core';

import { Chat } from '../chat';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-chats-form',
  templateUrl: './chats-form.component.html',
  styleUrls: ['./chats-form.component.css']
})
export class ChatsFormComponent implements OnInit {
  id: number = 0;
  success: boolean = false;
  errros: String[] = [];
  objeto: Chat = new Chat();

  constructor(
    private service: ChatsService
  ) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(){    
    if(this.id > 0){
      this.service
        .update(this.objeto)
        .subscribe(response => {
          this.success = true;
          this.errros = [];
        }, errorResponse => { this.errros = ['Erro ao atualizar.'];
      });
    }else{      
      this.service.save(this.objeto)
        .subscribe(response => {
          this.success = true;
          this.errros = [];
      this.objeto = response;        
  },
      errorResponse => { this.errros = errorResponse.errros;
      this.success = false;        
    });
    this.success = true;
  }
  }

}
