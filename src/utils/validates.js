import * as Yup from 'yup';

export const loginValidateSchema = Yup.object().shape({
    logUserName: Yup.string().required('user name Required'),
    logPassword: Yup.string().required('password required')
})
export const registrationValidateSchema = Yup.object().shape({
    email: Yup.string().required('user name Required'),
    password: Yup.string().required('password required'),
})
