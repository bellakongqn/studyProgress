import React, { useCallback, useState, useRef } from 'react'
import { useFormik } from 'formik';
import { get } from '../http'
import *  as Yup from 'yup'
import { useHistory, Redirect } from 'react-router-dom'
import { Button } from '../components/Button'
import Input from '../components/Input'
import Radio from '../components/Radio'
import { Modal } from '../components/Modal';
import { getQrCode, getScanStatus } from '../services/qRcode';

type  submitResponse = {
    status: number,
    code: number,
    data: string
}

type formInterface = {
    username: string,
    password: string,
    toggle: string,
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('username is Required'),
    password: Yup.string().required('password is Required'),
    toggle: Yup.string().required('Required')
})


export const  Login = () => {
    const history = useHistory()
    const token = localStorage.getItem('token')
    const [visible, setVisible] = useState(false)
    const [qrCode, setQrCode] = useState('')
    const isLogin = useRef(false)

    const handleFormSubmit = useCallback(async (values: formInterface) => {
        console.log(values)
        const res = await get<submitResponse>('/signUp', values)
        window.localStorage.setItem('token', res.data)
        history.push('/home')
    }, [history])

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            username: '',
            password: '',
            toggle: 'loginIn',
        },
        validationSchema,
        onSubmit: handleFormSubmit,
    })

    const getScan = useCallback(() =>{
        const interval = setInterval(()=>{
            getScanStatus().then(res => {
                if(res.isScan===true && isLogin.current === false) {
                    isLogin.current = true
                    history.push('/home')
                    clearInterval(interval)
                }
            })
        },1000)
     },[history])

    const handleWechat = useCallback(() => {
        getQrCode().then(res=>{
            if(res.code===200){
                setQrCode(res.url)
                setVisible(true)
                getScan()
            }
        })
     }, [getScan])

     

    if (token) {
        return (
            <Redirect to="/home" />
        )
    }

    

    return (
        <div className="login">
            <div className="login__content">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="u-margin-bottom-small">
                        <RadioGroup
                            {...getFieldProps('toggle')}
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
                    
                    <div className="wechat__content">
                        <div className="wechat__content-img">
                            <img src={require('../img/weChat.svg')} alt="weChat Icon" onClick={handleWechat}/>
                        </div>
                    </div>

                    <Button type="submit" className='btn btn--green u-margin-top-small'> Submit &rarr; </Button>
                    <Modal visible={visible} onClose={() => setVisible(false)}>
                        <div className="scan__content">
                            <h3 className="scan__content-title">扫码登录</h3>
                            <img src={qrCode}  alt="QrCode" className="scan__content-img"/>
                            <div  className="split-line u-margin-bottom-small scan-dot" />
                            <div className="scan__content-footer">使用微信扫一扫登录</div>
                        </div>
                    </Modal>
                </form>
            </div>
        </div>
    );

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