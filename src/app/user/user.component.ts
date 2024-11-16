import { Component } from '@angular/core';
import { RegistrationComponent } from "./registration/registration.component";
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { trigger, style, animate, transition, query } from "@angular/animations"

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RegistrationComponent, CommonModule, RouterOutlet],
  templateUrl: './user.component.html',
  styles: ``,
  animations: [
    trigger('routerFadeIn', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('1s ease-in-out', style({ opacity: 1 }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class UserComponent {

  constructor(private contex: ChildrenOutletContexts){
    
  }

  getRouterUrl() {
    return this.contex.getContext('primary')?.route?.url;
  }

}
