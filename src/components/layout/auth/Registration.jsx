import React, {useEffect} from "react";
import {Formik} from 'formik'
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import {registrationValidateSchema} from "../../../utils/validates";
import {useMutation} from "react-query";
import {registerFetch} from "../../../utils/apiCaller";
import {registerInitialValues, links} from "../../../utils/constants";

const Registration = () => {
    const { isLoading, error, data, isFetching, mutate } = useMutation(registerFetch);
    const navigate = useNavigate()

    useEffect(() => {
        if (data?.data?.success) {
            navigate(links.LOGIN)
        }
    }, [data?.data?.success])

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;


    const onSubmit = (values) => {
        mutate(values)
    }

    return (
        <Wrapper>
            <Title>Registration</Title>
            {data?.data?.error ? (
                <div>{data.data.error}</div>
            ) : null}

            <Formik
                validationSchema={registrationValidateSchema}
                initialValues={registerInitialValues}
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
                        name='firstName'
                        onChange={handleChange}
                        value={values.firstName}
                        placeholder="First name"
                        prefix={<UserOutlined />}
                    />
                    {errors.firstName && touched.firstName && errors.firstName}
                    <MyInput
                        name='lastName'
                        onChange={handleChange}
                        value={values.lastName}
                        placeholder="Last name"
                        prefix={<UserOutlined />}
                    />
                    {errors.lastName && touched.lastName && errors.lastName}
                    <MyInput
                        name='userName'
                        onChange={handleChange}
                        value={values.userName}
                        placeholder="User Name"
                        prefix={<UserOutlined />}
                    />
                    {errors.userName && touched.userName && errors.userName}
                    <MyInput
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        placeholder="email"
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
                    <PasswordInput
                        name="passwordConfirmation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirmation}
                        placeholder="input password confirmation"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    {errors.passwordConfirmation && touched.passwordConfirmation && errors.passwordConfirmation}
                    <Button onClick={handleSubmit} disabled={isFetching}>Submit</Button>
                </form>
            )}
            </Formik>
            <Link to={links.LOGIN}>You have the account? Login here</Link>
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
export default Registration;
