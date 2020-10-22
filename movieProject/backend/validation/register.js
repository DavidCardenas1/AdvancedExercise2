const Validator = require("validator");
function validateRegisterInput(data) {
    try {
        // // Convert empty fields to an empty string so we can use validator functions
        // data.name = !isEmpty(data.name) ? data.name : "";
        // data.email = !isEmpty(data.email) ? data.email : "";
        // data.password = !isEmpty(data.password) ? data.password : "";
        // data.password2 = !isEmpty(data.password2) ? data.password2 : "";

        // Name checks
        if (Validator.isEmpty(data.name)) {
            return "Name field is required";
        }
        // Email checks
        if (Validator.isEmpty(data.email)) {
            return "Email field is required";
        } else if (!Validator.isEmail(data.email)) {
            return "Email is invalid";
        }
        // Password checks
        if (Validator.isEmpty(data.password)) {
            return "Password field is required";
        }
        if (Validator.isEmpty(data.password2)) {
            return "Confirm password field is required";
        }
        if (!Validator.isLength(data.password, { min: 3, max: 30 })) {
            return "Password must be at least 6 characters";
        }
        if (!Validator.equals(data.password, data.password2)) {
            return "Passwords must match";
        }
        // return {
        //     errors,
        //     isValid: isEmpty(errors)
        // };
    } catch (err) {
        throw err.message

    }
}
module.exports=validateRegisterInput;