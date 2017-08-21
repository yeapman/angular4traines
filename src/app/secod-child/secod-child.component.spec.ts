/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecodChildComponent } from './secod-child.component';

describe('SecodChildComponent', () => {
  let component: SecodChildComponent;
  let fixture: ComponentFixture<SecodChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecodChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecodChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
