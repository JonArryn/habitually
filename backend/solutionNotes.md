// // VALIDATION MIDDLEWARE // //
// > > solution found for express validator, allowing you to extract validation rules and validation checks into separate functions
// https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go
// > Learning: separate function for validation rules and validation check
// > In router you need to omit req,res,next and instead invoke the validation rules function
// > Use next() in validation check function - route('/user').post(applyValidationRules(), checkForValidationErrors)
