import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  IProfile,
  ProfileService,
} from 'src/app/core/profile-service/profile.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
})
export class ProfileSettingsComponent implements OnInit {
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

  constructor(
    private profile: ProfileService,
    private translate: TranslateService,
  ) {}

  ngOnInit() {
    //ACI: Request User
    this.retrieveProfileUser();
  }

  saveProfile() {
    this.isSavingProfile = true;
    this.hasEncounteredError = false;
    console.log('User', this.user);
    this.profile.setName(this.user.firstName, this.user.lastName).then(
      (resp: IProfile) => {
        console.log('Save Name: ', resp);
        this.isSavingProfile = false;
        this.user = resp;
      },
      (error: any) => {
        console.error(error);
        if (error.error === 'Error on email generation') {
          this.retrieveProfileUser();
        }
        this.isSavingProfile = false;
        this.hasEncounteredError = true;
        this.errorMessage = error.error;
      },
    );
  }

  public retrieveProfileUser() {
    console.log('Make request');
    this.hasUserBeenRetrieved = false;
    this.profile.getProfileUser().then(
      (resp: IProfile) => {
        console.log('User Retrieved: ', resp);
        this.user = resp;
        this.hasUserBeenRetrieved = true;
        this.hasEncounteredError = false;
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = error.error;
        this.hasUserBeenRetrieved = false;
        this.hasEncounteredError = true;
        //AC1: Request User error, attempt fetch again
        this.retrieveProfileUser();
      },
    );
  }
}
