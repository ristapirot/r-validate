var rValidate = new RValidate

function alertSomething() {
    rValidate.submitForm()
}

rValidate.addOption([
    {
        class: 'number',
        name: 'numberOne',
        required: true,
        invalid: true,
        dirty: false,
        minLength: 5
    }, {
        class: 'number',
        name: 'numberTwo',
        invalid: true,
        dirty: false,
        minLength: 2
    }, {
        class: 'number',
        name: 'numberThree',
        invalid: true,
        dirty: false,
        minLength: 9
    }, {
        class: 'number',
        name: 'numberFour',
        invalid: true,
        dirty: false,
        required: true,
        minLength: 4
    }, {
        class: 'email',
        name: 'emailOne',
        invalid: true,
        dirty: false,
        required: true
    }, {
        class: 'email',
        name: 'emailTwo',
        invalid: true,
        dirty: false,
        required: false
    }, {
        class: 'password',
        name: 'passwordOne',
        invalid: true,
        dirty: false,
        required: true,
        minLength: 8,
        maxLength: 12
    }, {
        class: 'c-password',
        name: 'c-passwordOne',
        passField: 'passwordOne',
        invalid: true,
        dirty: false,
        required: true
    }
])