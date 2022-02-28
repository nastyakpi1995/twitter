import React, {useEffect, useState} from "react";
import {Formik} from 'formik'
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import {loginInitialValues, links} from "../../../utils/constants";
import {loginValidateSchema} from "../../../utils/validates";
import {useMutation} from "react-query";
import {loginFetch} from "../../../utils/apiCaller";

const Login = () => {
    const [user, setUser] = useState(null)
    const {mutate, data, isLoading} = useMutation(loginFetch)
    const navigate = useNavigate()

    useEffect(() => {
        if (data?.data?.success) {
            localStorage.setItem('user', JSON.stringify(user))
            navigate(links.HOME)
        }
    }, [data?.data?.success])

    const onSubmit = (values) => {
        mutate(values)
        setUser(values)
    }

    return (
        <Wrapper>
            <Title>Login</Title>
            {data?.data?.error ? (
                <div>{data.data.error}</div>
            ) : null}
            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginValidateSchema}
                onSubmit={onSubmit}>{({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                <form onSubmit={handleSubmit}>
                    <MyInput
                        name='logUserName'
                        onChange={handleChange}
                        value={values.logUserName}
                        placeholder="Basic usage"
                        prefix={<UserOutlined />}
                    />
                    {errors.logUserName && touched.logUserName && errors.logUserName}

                    <PasswordInput
                        name="logPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.logPassword}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    {errors.logPassword && touched.logPassword && errors.logPassword}
                    <Button onClick={handleSubmit} disabled={isLoading}>Submit</Button>
                </form>
            )}
            </Formik>
            <Link to={links.REGISTRATION}>Need the account? Register here</Link>
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
