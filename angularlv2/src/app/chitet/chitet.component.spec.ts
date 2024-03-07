import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitetComponent } from './chitet.component';

describe('ChitetComponent', () => {
  let component: ChitetComponent;
  let fixture: ComponentFixture<ChitetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChitetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
