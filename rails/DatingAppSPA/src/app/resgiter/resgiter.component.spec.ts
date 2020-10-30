/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResgiterComponent } from './resgiter.component';

describe('ResgiterComponent', () => {
  let component: ResgiterComponent;
  let fixture: ComponentFixture<ResgiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
