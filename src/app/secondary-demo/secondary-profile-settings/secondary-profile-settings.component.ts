import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  IProfile,
  ProfileService,
} from 'src/app/core/profile-service/profile.service';
import { ProfileStateService } from 'src/app/core/profile-state/profile-state.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-secondary-profile-settings',
  templateUrl: './secondary-profile-settings.component.html',
  styleUrls: ['./secondary-profile-settings.component.scss'],
})
export class SecondaryProfileSettingsComponent implements OnInit, OnDestroy {
  public title = 'Profile';
  public user: IProfile = {
    firstName: '',
    lastName: '',
    username: '',
    age: null,
  };

  public hasUserBeenRetrieved: boolean = false;
  public hasEncounteredError: boolean = false;
  public isSavingProfile: boolean = false;
  public errorMessage: string;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private profileState: ProfileStateService,
    private profile: ProfileService,
  ) {
    this.subscriptions.add(
      this.profileState.profileUser$
        .pipe(filter((user) => user != null))
        .subscribe((user: IProfile) => {
          this.hasUserBeenRetrieved = true;
          console.log('User', user);
          this.user = user;
        }),
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  saveProfile() {
    this.isSavingProfile = true;
    this.hasEncounteredError = false;
    console.log('User', this.user);
    this.profile.setName(this.user.firstName, this.user.lastName).then(
      (resp: IProfile) => {
        console.log('Save Name: ', resp);
        this.isSavingProfile = false;
        this.profileState.updateProfileUser(resp);
      },
      (error: any) => {
        console.error(error);
        if (error.error === 'Error on email generation') {
          this.profileState.profileUser$.toPromise().then((user) => {
            this.user = user;
          });
        }
        this.isSavingProfile = false;
        this.hasEncounteredError = true;
        this.errorMessage = error.error;
      },
    );
  }
}
