import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdComponent } from './cold.component';

describe('ColdComponent', () => {
  let component: ColdComponent;
  let fixture: ComponentFixture<ColdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
