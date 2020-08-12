import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsthingComponent } from './formsthing.component';

describe('FormsthingComponent', () => {
  let component: FormsthingComponent;
  let fixture: ComponentFixture<FormsthingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsthingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
