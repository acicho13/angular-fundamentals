import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service'

@Component({
  templateUrl: "./profile.component.html",
  styles: [
    `
      em {
        float: right;
        color: red;
        padding-left: 10px;
      }
      .error input {
        background-color: blue;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error: -moz-placeholder {
        color: #999;
      }
      .error:ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  // register service class creates instance and give us when we reference it in constructor
  constructor(private auth: AuthService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr, 
              private router: Router) {}

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [
      Validators.required,
      Validators.pattern("[a-zA-Z].*"),
    ]);
    this.lastName = new FormControl(
      this.auth.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  cancel() {
    this.router.navigate(["events"]);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe(() => {
        this.toastr.success('Profile Saved');
      })
    }
  }

  logout(){
    this.auth.logout().subscribe(() => {
      this.router.navigate(['user/login']);
    })
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}
