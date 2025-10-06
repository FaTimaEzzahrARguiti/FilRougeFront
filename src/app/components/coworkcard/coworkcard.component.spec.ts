import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkcardComponent } from './coworkcard.component';

describe('CoworkcardComponent', () => {
  let component: CoworkcardComponent;
  let fixture: ComponentFixture<CoworkcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoworkcardComponent]
    });
    fixture = TestBed.createComponent(CoworkcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
