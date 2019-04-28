import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoaccesComponent } from './noacces.component';

describe('NoaccesComponent', () => {
  let component: NoaccesComponent;
  let fixture: ComponentFixture<NoaccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoaccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
