import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JouerPage } from './jouer.page';

describe('JouerPage', () => {
  let component: JouerPage;
  let fixture: ComponentFixture<JouerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JouerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JouerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
