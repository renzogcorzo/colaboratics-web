import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogitechComponent } from './logitech.component';

describe('LogitechComponent', () => {
  let component: LogitechComponent;
  let fixture: ComponentFixture<LogitechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogitechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
