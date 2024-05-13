/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Graph2Component } from './graph2.component';

describe('Graph2Component', () => {
  let component: Graph2Component;
  let fixture: ComponentFixture<Graph2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
