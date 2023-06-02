function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = () => {
                    console.log(inputElement.value);
                }
            }
        });
    }
}

Validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: () => {
            
        }
    };
}

Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: () => {

        }
    };
}