import React from 'react'
import { useFormik } from 'formik';
import { get } from '../http'
import *  as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Radio from '../components/Radio'

interface submitResponse {
    status: number,
    code: number,
    data: string
}

interface formInterface {
    username: string,
    password: string,
    toggle: string,
}
const validationSchema = Yup.object().shape({
    username: Yup.string().required('username is Required'),
    password: Yup.string().required('password is Required'),
    toggle: Yup.string().required('Required')
})
function Login() {



    const history = useHistory()

    const { handleSubmit, handleChange, values, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            username: '',
            password: '',
            toggle: 'loginIn',
        },
        validationSchema,
        onSubmit: async (values: formInterface) => {
            console.log(values)
            const res = await get<submitResponse>('/signUp', values)
            window.localStorage.setItem('token', res.data)
            history.push('/home')
        },
    })

    return (
        <div className="login">
            <div className="login__content">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="u-margin-bottom-small">
                        <RadioGroup onChange={handleChange}
                            value={values.toggle}
                        />
                    </div>

                    <Input type="text"
                        name="username" id="username"
                        placeholder="your name"
                        {...getFieldProps('username')}
                        error={touched.username && errors.username ? errors.username : undefined} />

                    <Input type="password" name="password" id="password"
                        placeholder="your password"
                        {...getFieldProps('password')}
                        error={touched.password && errors.password ? errors.password : undefined} />

                    <Button type="submit" className='btn--green u-margin-top-small'> Submit &rarr; </Button>

                </form>
            </div>
        </div>
    )
}

const RadioGroup = (props: any) => (
    <>
        <Radio value="loginIn" id="loginIn" name="toggle"
            checked={props.value === 'loginIn'}
            onChange={props.onChange} label="Login In" />
        <Radio value="signUp" id="signUp" name="toggle"
            checked={props.value === 'signUp'}
            onChange={props.onChange} label="Sign Up" />
    </>
)

export default Login;