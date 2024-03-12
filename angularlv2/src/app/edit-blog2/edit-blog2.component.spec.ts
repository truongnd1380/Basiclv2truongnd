import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlog2Component } from './edit-blog2.component';

describe('EditBlog2Component', () => {
  let component: EditBlog2Component;
  let fixture: ComponentFixture<EditBlog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBlog2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
