import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRegister } from './register-register';

describe('RegisterRegister', () => {
  let component: RegisterRegister;
  let fixture: ComponentFixture<RegisterRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
