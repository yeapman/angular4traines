/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainrouteComponent } from './mainroute.component';

describe('MainrouteComponent', () => {
  let component: MainrouteComponent;
  let fixture: ComponentFixture<MainrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
