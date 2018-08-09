function RValidate() {
    var options = {
        'inp': {
            invalid: true,
            text: '',
            required: true,
            minLength: 0
        },
        'email': {
            invalid: false,
            required: true,
            text: ''
        },
        'number': {
            invalid: true,
            required: true,
            text: ''
        }
    }

    function validField(field) {
        options[field].invalid = false
    }

    function invalidField(field) {
        options[field].invalid = true
    }

    function colorFields(field) {
        if (options[field].invalid) {
            document.getElementsByClassName(field)[0].style.backgroundColor = 'lightcoral'
            console.log('Invalid')   
        } else {
            document.getElementsByClassName(field)[0].style.backgroundColor = 'white'
            console.log('Valid')
        }
    }
    

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var inputs = document.getElementsByClassName('inp')
    var inputsLength = inputs.length

    var emails = document.getElementsByClassName('email')
    var emailsLength = emails.length

    var numbers = document.getElementsByClassName('number')
    var numbersLength = numbers.length



    inputs[0].addEventListener('input', function() {
        if (options['inp'].minLength > 0) {
            if (inputs[0].value.length > options['inp'].minLength) {
                invalidField('inp')
                colorFields('inp')
            } else {
                validField('inp')
                colorFields('inp')
            }
            options['inp'].text = inputs[0].value
            console.log(options['inp'].text)
        }
    })

    inputs[0].addEventListener('focusout', function() {
        if (options['inp'].required && options['inp'].text == '') {
            invalidField('inp')
            colorFields('inp')
            alert('This field is required')
            
        }
    })








    emails[0].addEventListener('focusout', function() {
        debugger
        if (!validateEmail(options['email'].text)) {
            invalidField('email')
            colorFields('email')
            alert('This field has to be valid email form')
        } else if (options['email'].required && options['email'].text == '') {
            invalidField('email')
            colorFields('email')
            alert('This field is required')
        } else {
            validField('email')
            colorFields('email')
        }
    })

    emails[0].addEventListener('input', function(e) {
        console.log()
        options['email'].text = e.target.value
        console.log(options['email'].text)
    })






    
    numbers[0].addEventListener('input', function(e) {
        if (isNaN(e.target.value)) {
            invalidField('number')
            colorFields('number')
            alert('Only numbers')
        } else if (!isNaN(options['number'].text)) {
            validField('number')
            colorFields('number')          
        }
        options['number'].text = e.target.value
    })

    numbers[0].addEventListener('focusout', function() {
        if (options['number'].required && options['number'].text == '') {
            invalidField('number')
            colorFields('number')
            alert('This field is required')
        }
    })


    return {
        addOption: function(opt) {
            options = opt
            console.log(options)
        }
    }
}