import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmoviComponent } from './filmovi.component';

describe('FilmoviComponent', () => {
  let component: FilmoviComponent;
  let fixture: ComponentFixture<FilmoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
