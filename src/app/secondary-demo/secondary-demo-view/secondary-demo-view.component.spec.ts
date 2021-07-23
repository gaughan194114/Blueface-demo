import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDemoViewComponent } from './secondary-demo-view.component';

describe('SecondaryDemoViewComponent', () => {
  let component: SecondaryDemoViewComponent;
  let fixture: ComponentFixture<SecondaryDemoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryDemoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryDemoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
