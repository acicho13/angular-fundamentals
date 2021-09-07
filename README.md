# NgFundamentals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes

Typescript

- Static Typing
  let name: string

- Typescript Interfaces
  interface ICat {
  name: string
  age: number ## option birthdate?
  birthdate?: date
  }

- Class Properties
  class Cat {
  name: string
  color
  constructor (name) {
  this.name = name
  }
  }

- Public and Private Accessibility
  class is public by default
  class Cat { ## can't access outside of class
  private name: string
  private color: string
  constructor(name, color) {
  this.name = name
  this.color = color
  }
  }
  ==
  class Cat {
  constructor(private name, private color) {
  }
  }

- Expression Restrictions {{ }}
  Can't
  Assignments (=, +=, ++, etc)
  new Keyword
  Expression chaingin with ;
  Global Namespace (widown, console)
  Recommend
  no-side effects
  fast
  simple
- Statement
  Can't
  Assignments Exept =
  new Keywords
  Golbal namespace
  Recommendation
  simple

  ## Unit tests
  Jasmine

  describe()
    - containing function for suite of tests
  beforeEach()
    - gives us place for common set up code
  it()
    - creates separate unit test
  espect()
    - how the test pass
  Matchers - allow us to expect
    - toBe()
    - toContain()
    - toBeDefined()

