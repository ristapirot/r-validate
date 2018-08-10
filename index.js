var rValidate = new RValidate

rValidate.addOption([
    {
        class: 'number',
        name: 'numberOne',
        required: true,
        minLength: 5
    }, {
        class: 'number',
        name: 'numberTwo',
        minLength: 2
    }, {
        class: 'number',
        name: 'numberThree',
        minLength: 9
    }, {
        class: 'number',
        name: 'numberFour',
        required: true,
        minLength: 4
    }, {
        class: 'email',
        name: 'emailOne',
        required: true
    }, {
        class: 'email',
        name: 'emailTwo',
        required: false
    }, {
        class: 'password',
        name: 'passwordOne',
        required: true,
        minLength: 8,
        maxLength: 12
    }, {
        class: 'c-password',
        name: 'c-passwordOne',
        passField: 'passwordOne',
        required: true
    }
])