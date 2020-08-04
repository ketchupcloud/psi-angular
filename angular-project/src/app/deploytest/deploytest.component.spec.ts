import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploytestComponent } from './deploytest.component';

describe('DeploytestComponent', () => {
  let component: DeploytestComponent;
  let fixture: ComponentFixture<DeploytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
