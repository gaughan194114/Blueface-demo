import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDemoViewComponent } from './primary-demo-view.component';

describe('PrimaryDemoViewComponent', () => {
  let component: PrimaryDemoViewComponent;
  let fixture: ComponentFixture<PrimaryDemoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryDemoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryDemoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
