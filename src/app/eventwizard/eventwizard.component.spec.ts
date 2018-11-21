import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventwizardComponent } from './eventwizard.component';

describe('EventwizardComponent', () => {
  let component: EventwizardComponent;
  let fixture: ComponentFixture<EventwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventwizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
