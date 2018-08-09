var rValidate = new RValidate

rValidate.addOption([
    {
        class: 'number',
        required: true
    }, {
        class: 'email',
        required: true
    }, {
        class: 'password',
        required: true,
        minLength: 8
    }, {
        class: 'c-password',
        required: true
    }
])