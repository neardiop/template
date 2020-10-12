import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrpComponent } from './drp.component';

describe('DrpComponent', () => {
  let component: DrpComponent;
  let fixture: ComponentFixture<DrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
