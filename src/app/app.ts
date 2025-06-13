import { inject } from '@angular/core';
import { AuthService } from './servicios/api/auth.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    authService=inject(AuthService);
    user?:any;

    constructor(){
      this.authService.login({
email:'sebastian@gmail.com',
password:'sebastian12345',
      })
      .subscribe((r)=>{

        this.authService.getCurrentAuthUser().subscribe((r)=>{

        })
      }  )
    }
}
