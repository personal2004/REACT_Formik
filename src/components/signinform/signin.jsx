import './index.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';

const initialValues={
    email:'',
    password:'',
}
const savedvalue={
    email:'koedung@gmail.com',
    password:'T hopper#489u3n4',
}

// const validate=values=>{
//     let errors={}

//     if(!values.email){
//       errors.email="Required"
//     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//         errors.email="Email format is wrong"
//     }

//     if(!values.password){
//       errors.password="Required"
//     }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)){
//         errors.password="Password format is wrong"
//     }

//     return errors
//   }


const validationSchema=Yup.object({
    email:Yup.string()
    .required('Required !')
    .email("Not a valid email"),
    password:Yup.string()
    .required('Required !')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
})

const SignIn=()=>{

    const navigate=useNavigate();
    const [FormValues,setFormValues]=useState(null)
    const formik=useFormik({
        initialValues:(FormValues || initialValues ),
        onSubmit:(values,onSubmitPropps)=>{
         onSubmitPropps.setSubmitting(false)
         onSubmitPropps.resetForm()
         navigate('/youtube')
        },
        validationSchema,
        enableReinitialize:true,
        // validate
    });

    return(
        <div className='SignIn_page'>
        <form onSubmit={formik.handleSubmit}>
           <h1>SIGN IN</h1>
            <div className='form-control'>
            <label htmlFor='email'>Email</label>
               <div>
                <input
                id='email' 
                type="email"
                name='email'
                autoComplete='email'
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
                {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <div className='Error'>{formik.errors.email}</div>:null}</div>
            </div>

            <div className='form-control'>
               <label htmlFor='password'>Password</label>
               <div>
                <input
                id='password'
                type="password" 
                name='password'
                autoComplete='"new-password"'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ?<div className='Error'>{formik.errors.password}</div>:null}
                </div>
            </div>
            <button type='button' onClick={()=>(setFormValues(savedvalue))}>Load Data</button>
            <button type='reset'onClick={() => formik.resetForm()}>Reset</button>
            <button className='form_submit_button' type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default SignIn