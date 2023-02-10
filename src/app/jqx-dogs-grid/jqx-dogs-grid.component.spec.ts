import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxDogsGridComponent } from './jqx-dogs-grid.component';

describe('JqxDogsGridComponent', () => {
  let component: JqxDogsGridComponent;
  let fixture: ComponentFixture<JqxDogsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqxDogsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JqxDogsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
