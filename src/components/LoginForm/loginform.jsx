import { Formik,Form } from "formik";
import * as Yup from 'yup';
import FormikControl from "../FormikControl/formikControl";
const Login=()=>{
    const initialValues={
        email:'',
        password:'',
    }
    const validationSchema=Yup.object({
        email:Yup.string()
        .email('Not a Email Format')
        .required('Required !'),
        password:Yup.string().required('Required !')
    })
    const onSubmit=(values)=>{console.log(values)}
    return(
        <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit}>
        {
            formik=>{
                return(
                <Form>
                   <FormikControl control='input' name='email' label='Email Id'/> 
                   <FormikControl control='input' name='password' label='Password'/>             
                   <button type="submit"disabled={!formik.isValid}>Submit</button>
                </Form>
                )
            }
        }
        </Formik>
    )
}

export default Login