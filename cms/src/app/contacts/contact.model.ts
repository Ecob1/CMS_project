// import { Component } from "@angular/core";

// @Component({
//     selector:'app-server',
//     templateUrl:'../contacts/contacts.component.html'
// })
export class Contact {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
    public imageUrl: string,
    public group?: Contact[]
  ) {}
}
