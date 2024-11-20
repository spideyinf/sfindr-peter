import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {Test3Component} from "./test3.component";
import {HeavyComponent} from "./heavy/heavy.component";

describe('Test3Component', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        Test3Component,
        HeavyComponent
      ],
    }).compileComponents();
  });

  it('reloads within 100 ms', fakeAsync(() => {
    const fixture = TestBed.createComponent(Test3Component);
    fixture.detectChanges();

    const s = performance.now();
    tick(5000);
    fixture.detectChanges();
    const e = performance.now();

    expect(e - s).toBeLessThan(100);

    fixture.destroy();
  }));

});
