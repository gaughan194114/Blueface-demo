import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProfile, ProfileService } from '../profile-service/profile.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileStateService {
  public profileUser$: Observable<IProfile>;

  private profileUsersSubject: BehaviorSubject<IProfile> = new BehaviorSubject(
    null,
  );

  constructor(private profile: ProfileService) {
    this.profileUser$ = this.profileUsersSubject.asObservable();
    this.retrieveProfileUser();
  }

  public updateProfileUser(user: IProfile): void {
    this.profileUsersSubject.next(user);
  }

  public retrieveProfileUser() {
    this.profile.getProfileUser().then(
      (resp: IProfile) => {
        this.updateProfileUser(resp);
      },
      (error: any) => {
        this.retrieveProfileUser();
      },
    );
  }
}
