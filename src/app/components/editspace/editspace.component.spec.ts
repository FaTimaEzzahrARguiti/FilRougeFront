import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspaceComponent } from './editspace.component';

describe('EditspaceComponent', () => {
  let component: EditspaceComponent;
  let fixture: ComponentFixture<EditspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
