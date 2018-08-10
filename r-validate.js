function RValidate() {
    var options = []
    var classes = []

    var inputs = document.getElementsByTagName('input')
    for (var i = 0; i < inputs.length; i++) {
        //console.log(inputs[i])
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
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
            //console.log(classes)
            classes = []
            for(var i = 0; i < options.length; i++) {
                if (!classes.includes(options[i].class)) {
                    classes.push(options[i].class)
                }
            }

            console.log(classes)



            for(var i = 0; i < classes.length; i++) {
                var elements = document.getElementsByClassName(classes[i])
                for(var j = 0; j < elements.length; j++) {
                    elements[j].addEventListener('focus', function() {
                        var listClass = this.className.split(" ")
                        listClass.forEach(el => {
                            if (classes.includes(el)) {
                                var findOption = options.filter(el => el.name == this.name)
                                switch(el) {
                                    case 'number': 
                                        this.addEventListener('input', function(event) {
                                            if (isNaN(event.target.value) || (event.target.value.length < findOption[0].minLength && event.target.value.length > 0)) {
                                                this.style.backgroundColor = 'lightcoral'
                                                console.log(findOption[0].minLength)
                                            } else {
                                                this.style.backgroundColor = 'white'
                                            }
                                        })
                                        this.addEventListener('focusout', function(event) {
                                            
                                            if (findOption) {
                                                if (findOption[0].required && event.target.value == '') {
                                                    this.style.backgroundColor = 'lightcoral'
                                                    console.log('The field ' + findOption[0].name + ' is required') 
                                                }
                                            }
                                        })
                                        break;
                                    case 'email':
                                        this.addEventListener('input', function(event) {
                                            if (!validateEmail(event.target.value)) {
                                                this.style.backgroundColor = 'lightcoral'
                                            } else {
                                                this.style.backgroundColor = 'white'
                                            }
                                        })
                                        this.addEventListener('focusout', function(event) {
                                            if (findOption) {
                                                if (findOption[0].required && event.target.value == '') {
                                                    this.style.backgroundColor = 'lightcoral'
                                                    console.log('The field ' + findOption[0].name + ' is required') 
                                                }
                                            }
                                        })
                                        break;
                                    case 'password': 
                                        this.addEventListener('input', function(event) {
                                            if (findOption[0].maxLength && findOption[0].minLength) {
                                                if (event.target.value.length < findOption[0].minLength || event.target.value.length > findOption[0].maxLength) {
                                                    this.style.backgroundColor = 'lightcoral'
                                                } else {
                                                    this.style.backgroundColor = 'white'
                                                }
                                            } else if (findOption[0].maxLength) {
                                                if (event.target.value.length < 0 || event.target.value.length > findOption[0].maxLength) {
                                                    this.style.backgroundColor = 'lightcoral'
                                                } else {
                                                    this.style.backgroundColor = 'white'
                                                }
                                            } else if (findOption[0].minLength) {
                                                if (event.target.value.length < findOption[0].minLength || event.target.value.length > 100) {
                                                    this.style.backgroundColor = 'lightcoral'
                                                } else {
                                                    this.style.backgroundColor = 'white'
                                                }
                                            }
                                               
                                        })
                                        this.addEventListener('focusout', function(event) {
                                            if (findOption) {
                                                if (findOption[0].required && event.target.value == '') {
                                                    this.style.backgroundColor = 'lightcoral'
                                                    console.log('The field ' + findOption[0].name + ' is required') 
                                                }
                                            }
                                        })
                                        break;
                                    case 'c-password': 
                                        this.addEventListener('input', function(event) {
                                            if (findOption) {
                                                if (document.getElementsByName(findOption[0].passField)[0].value !== event.target.value) {
                                                    this.style.backgroundColor = 'lightcoral'
                                                } else {
                                                    this.style.backgroundColor = 'white'
                                                }
                                            }
                                        })
                                }
                                
                            }
                        })
                    })
                    
                }
            }
        }
    }
}