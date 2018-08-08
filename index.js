var rValidate = new RValidate



var options = {
    'inp': {
        invalid: true,
        text: '',
        required: true,
        minLength: 10
    }, 
    'email': {
        invalid: true,
        required: true,
        text: ''
    },
    'number': {
        invalid: true,
        required: true,
        text: ''
    }
}

rValidate.addOption(options)