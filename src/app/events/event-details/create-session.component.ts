import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  CheckboxControlValueAccessor,
} from "@angular/forms";
import { ISession, restrictedWords } from "../shared/index";

@Component({
  selector: "create-session",
  templateUrl: "./create-session.component.html",
  styles: [`
    em {
      float: right;
      color: red;
      padding-left: 10px;
    }
    .error input,
    .error select,
    .error textarea {
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
    }`,
  ],
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  constructor() {}

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.name,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: [],
    };
    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit();
  }

  ngOnInit() {
    this.name = new FormControl("", Validators.required);
    this.presenter = new FormControl("", Validators.required);
    this.duration = new FormControl("", Validators.required);
    this.level = new FormControl("", Validators.required);
    this.abstract = new FormControl("", [
      Validators.required,
      Validators.maxLength(400),
      restrictedWords(["foo", "bar"]),
    ]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }
}
