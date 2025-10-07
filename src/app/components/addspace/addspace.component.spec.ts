import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspaceComponent } from './addspace.component';

describe('AddspaceComponent', () => {
  let component: AddspaceComponent;
  let fixture: ComponentFixture<AddspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
