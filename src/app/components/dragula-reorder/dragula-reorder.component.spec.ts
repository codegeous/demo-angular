import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaReorderComponent } from './dragula-reorder.component';

describe('DragulaReorderComponent', () => {
  let component: DragulaReorderComponent;
  let fixture: ComponentFixture<DragulaReorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaReorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
