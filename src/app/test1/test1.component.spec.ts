import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Test1Component} from "./test1.component";
import {Test1Service} from "./test1.service";
import {ReactiveFormsModule} from "@angular/forms";

describe('Test1Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        Test1Component
      ],
    }).compileComponents();
  });

  const getInput = (compiled: HTMLElement, name: string) => {
    return compiled.querySelector<HTMLInputElement|HTMLSelectElement>(`[name="${name}"]`);
  }

  const setInputValue = (fixture: ComponentFixture<Test1Component>, name: string, value: string) => {
    const input = getInput(fixture.nativeElement as HTMLElement, name)!;
    input.value = value;
    const event = input instanceof HTMLInputElement ? 'input' : 'change';
    input.dispatchEvent(new Event(event));
    fixture.detectChanges();
  }

  it('should not have brand or color fields if no type is selected', () => {
    const fixture = TestBed.createComponent(Test1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(getInput(compiled, 'type')!.value).toBe('');
    expect(getInput(compiled, 'brand')).toBeNull();
    expect(getInput(compiled, 'color')).toBeNull();
  });

  it('should only have color field is type is bike', () => {
    const fixture = TestBed.createComponent(Test1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    setInputValue(fixture, 'type', 'bike');

    expect(getInput(compiled, 'brand')).toBeNull();
    expect(getInput(compiled, 'color')).not.toBeNull();
  });

  it('should be disabled until the form is valid', () => {
    const fixture = TestBed.createComponent(Test1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector<HTMLButtonElement>('button')!;
    expect(button.disabled).toBe(true);

    setInputValue(fixture, 'name', 'test');
    setInputValue(fixture, 'type', 'bike');
    setInputValue(fixture, 'color', 'red');

    expect(button.disabled).toBe(false);
  })

  it('should call the service with the form\'s value on submit', () => {
    const service = new Test1Service();
    jest.spyOn(service, 'test');

    TestBed.overrideComponent(Test1Component, {
      set: {
        providers: [
          {
            provide: Test1Service,
            useValue: service
          }
        ]
      }
    });

    const fixture = TestBed.createComponent(Test1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    setInputValue(fixture, 'name', 'test');
    setInputValue(fixture, 'type', 'bike');
    setInputValue(fixture, 'color', 'red');
    compiled.querySelector<HTMLButtonElement>('button')!.click();

    expect(service.test).toHaveBeenCalledTimes(1)
    expect(service.test).toHaveBeenCalledWith({name: 'test', type: 'bike', color: 'red'});
  });
});
