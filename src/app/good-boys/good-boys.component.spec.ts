import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodBoysComponent } from './good-boys.component';

describe('GoodBoysComponent', () => {
  let component: GoodBoysComponent;
  let fixture: ComponentFixture<GoodBoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodBoysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
