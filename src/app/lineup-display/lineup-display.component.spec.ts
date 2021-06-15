import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineupDisplayComponent } from './lineup-display.component';

describe('LineupDisplayComponent', () => {
  let component: LineupDisplayComponent;
  let fixture: ComponentFixture<LineupDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineupDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineupDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
