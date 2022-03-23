import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariosViewsComponent } from './varios-views.component';

describe('VariosViewsComponent', () => {
  let component: VariosViewsComponent;
  let fixture: ComponentFixture<VariosViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariosViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariosViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
