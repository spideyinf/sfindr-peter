import {Component, OnInit} from '@angular/core';
import {Test1Service} from "./test1.service";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
  providers: [Test1Service]
})
export class Test1Component implements OnInit {

  constructor(private test1Service: Test1Service) {
  }

  ngOnInit() {
  }

  submit(value: any) {
    this.test1Service.test(value);
  }

}
