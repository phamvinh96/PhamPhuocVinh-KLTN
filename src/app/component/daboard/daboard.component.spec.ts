import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaboardComponent } from './daboard.component';

describe('DaboardComponent', () => {
  let component: DaboardComponent;
  let fixture: ComponentFixture<DaboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaboardComponent]
    });
    fixture = TestBed.createComponent(DaboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
