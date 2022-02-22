import React from "react";
import {Formik} from 'formik'
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {routes} from "../../utils/constants";
import {loginValidateSchema} from "../../utils/validates";

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {

    const onSubmit = (values) => {
        console.log('values', values)
    }
    return (
        <Wrapper>
            <Title>Login</Title>
            <Formik
                initialValues={initialValues}
                validationSchema={loginValidateSchema}
                onSubmit={onSubmit}>{({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                <form onSubmit={handleSubmit}>
                    <MyInput
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        placeholder="Basic usage"
                        prefix={<UserOutlined />}
                    />
                    {errors.email && touched.email && errors.email}

                    <PasswordInput
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    {errors.password && touched.password && errors.password}
                    <Button onClick={handleSubmit} disabled={isSubmitting}>Submit</Button>

                </form>
            )}
            </Formik>
            <Link to={routes.REGISTRATION}>Need the account? Register here</Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const MyInput = styled(Input)`
    margin-bottom: 20px
`
const PasswordInput = styled(Input.Password)`
  margin-bottom: 20px
`
const Title = styled.div`
  margin-bottom: 20px;
  color: #bd9595;
`
export default Login;
