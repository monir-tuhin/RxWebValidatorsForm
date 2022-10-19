import {alpha, required, compare } from '@rxweb/reactive-form-validators';

export class User {
    private _firstName = '';
    private _lastName = '';

    fullName: string;

    @alpha()
    @required()
    set firstName(value: string) {
        this._firstName = value;
        this.setFullName();
    }

    get firstName(): string {
        return this._firstName;
    }

    @required()
    set lastName(value: string) {
        this._lastName = value;
        this.setFullName();
    }

    get lastName(): string {
       return this._lastName;
    }

    @required()
    userName: string;

    @required()
    password: string;

    @compare({fieldName: 'password'})
    confirmPassword: string;

    setFullName() {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
}
