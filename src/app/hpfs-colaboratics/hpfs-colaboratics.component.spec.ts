import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpfsColaboraticsComponent } from './hpfs-colaboratics.component';

describe('HpfsColaboraticsComponent', () => {
  let component: HpfsColaboraticsComponent;
  let fixture: ComponentFixture<HpfsColaboraticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpfsColaboraticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpfsColaboraticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
