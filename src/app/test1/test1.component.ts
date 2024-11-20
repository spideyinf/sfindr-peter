import { Component, OnInit } from '@angular/core';
import { Test1Service } from './test1.service';
import {
  FormBuilder,
  FormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
  providers: [Test1Service],
})
export class Test1Component implements OnInit {
  public form!: UntypedFormGroup;
  protected destroy$ = new Subject<void>();

  constructor(
    private test1Service: Test1Service,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.setupForms();

    this.form
      .get('type')!
      .valueChanges.pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe({
        next: (val) => {
          if (val === 'car') {
            this.form.removeControl('color');
            this.form.addControl(
              'brand',
              new FormControl(null, [Validators.required])
            );
          } else {
            this.form.removeControl('brand');
            this.form.addControl(
              'color',
              new FormControl(null, [Validators.required])
            );
          }
        },
      });
  }

  public submit(value: any) {
    this.test1Service.test(value);
  }

  private setupForms(): void {
    this.form = this._formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }
}
