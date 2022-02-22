import * as Yup from 'yup';

export const loginValidateSchema = Yup.object().shape({
    email: Yup.string().required('email Required'),
    password: Yup.string().required('password required')
})
export const registrationValidateSchema = Yup.object().shape({
    email: Yup.string().required('email Required'),
    password: Yup.string().required('password required'),
    passwordConfirmation: Yup.string().test('passwords-match', 'Passwords must match', function(value){
        return this.parent.password === value
    })
})
