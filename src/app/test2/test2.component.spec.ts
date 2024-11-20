import {TestBed} from "@angular/core/testing";
import {Test2Component} from "./test2.component";

describe('Test2Component', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        Test2Component
      ],
    }).compileComponents();
  });

  it('does something', () => {
    throw new Error('Write me');
  });

});
