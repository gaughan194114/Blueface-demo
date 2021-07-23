import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { SecondaryProfileSettingsComponent } from './secondary-profile-settings.component';

describe('SecondaryProfileSettingsComponent', () => {
  let component: SecondaryProfileSettingsComponent;
  let fixture: ComponentFixture<SecondaryProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryProfileSettingsComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
