function RValidate() {
    var options = []
    var classes = []

    var inputs = document.getElementsByTagName('input')
    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i])
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function isRequired() {

    }

    

    return {
        addOption: function(opt) {
            options = []
            classes = []
            for(var i = 0; i < opt.length; i++) {
                options.push(opt[i])
            }
            for(var i = 0; i < options.length; i++) {
                if (options[i].class) {
                    classes.push(options[i].class)
                    
                }
            }
            this.addEvents()
        },
        addEvents: function() {
            console.log(classes)
            for(var i = 0; i < classes.length; i++) {
                var elements = document.getElementsByClassName(classes[i])
                for(var j = 0; j < elements.length; j++) {
                    if (classes[i] == 'number') {
                        for(var k = 0; k < options.length; k++) {
                            if (options[k].class == 'number') {
                                var required = options[k].required
                                elements[j].addEventListener('input', function(event) {
                                    if (isNaN(event.target.value)) {
                                        this.style.backgroundColor = 'lightcoral'
                                    } else {
                                        this.style.backgroundColor = 'white'
                                    }
                                })
                                elements[j].addEventListener('blur', function(event) {
                                    if (required && event.target.value == '') {
                                        console.log('Field number is required')
                                        this.style.backgroundColor = 'lightcoral'
                                    }
                                })
                            }
                        }
                    } else if (classes[i] == 'email') {
                        for (var k = 0; k < options.length; k++) {
                            var required = options[k].required
                            elements[j].addEventListener('input', function(event) {
                                if (!validateEmail(event.target.value)) {
                                    this.style.backgroundColor = 'lightcoral'
                                } else {
                                    this.style.backgroundColor = 'white'
                                }
                            })
                            elements[j].addEventListener('blur', function(event) {
                                if (required && event.target.value == '') {
                                    console.log('Field email is required')
                                    this.style.backgroundColor = 'lightcoral'
                                }
                            })
                        }
                    } else if (classes[i] == 'password') {
                        for (var k = 0; k < options.length; k++) {
                            if (options[k].class == 'password') {
                                if (options[k].minLength && options[k].minLength > 0) {
                                    var minLength = options[k].minLength
                                    
                                    elements[j].addEventListener('input', function(event) {
                                        if (event.target.value.length > minLength) {
                                            this.style.backgroundColor = 'lightcoral'
                                        } else {
                                            this.style.backgroundColor = 'white'
                                        }
                                    })
                                }
                                if (options[k].required) {
                                    var required = options[k].required
                                    elements[j].addEventListener('blur', function(event) {
                                        if (required && event.target.value == '') {
                                            console.log('Field password is required')
                                            this.style.backgroundColor = 'lightcoral'
                                        }
                                    })
                                }
                            }
                        }
                    } else if (classes[i] == 'c-password') {
                        for (var k = 0; k < options.length; k++) {
                            if (options[k].class == 'c-password') {
                                var required = options[k].required
                                if (options[k].minLength && options[k].minLength > 0) {
                                    var required = options[k].required
                                    elements[j].addEventListener('input', function(event) {
                                        
                                    })
                                    
                                }
                                if (options[k].required) {
                                    elements[j].addEventListener('blur', function(event) {
                                        if (required && event.target.value == '') {
                                            console.log('Field confirm password is required')
                                            this.style.backgroundColor = 'lightcoral'
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}