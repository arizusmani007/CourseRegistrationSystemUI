import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/model/customer';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  custArray: Array<Customer> = new Array;
  model = new Customer('', 0);
  constructor() { }

  ngOnInit(): void {
  }

  //Add customer event
  createCustomer() {

    console.log("customer creation here-->");

    // Add customer in Customer Array using push event.
    this.custArray.push(new Customer(this.model.name, this.model.age));
    console.log(JSON.stringify(this.custArray));

  }

  //Delete customer event
  deleteCustomer(index: number) {

    console.log("customer deletion here-->");

    // Delete customer from Customer Array using splice event.
    this.custArray.splice(index, 1);
    console.log(JSON.stringify(this.custArray));

  }

  //Edit customer event
  editCustomer(index: number) {

    console.log("customer updation here-->");

    let name: string = prompt('Enter name');
    let age: number = parseInt(prompt('Enter age'));
    if (name.length != 0 && age != 0) {
      let value = new Customer(name, age);
      // Edit customer in Customer Array using splice event.
      this.custArray.splice(index, 1, value);
      console.log(JSON.stringify(this.custArray));
    }

  }


}
