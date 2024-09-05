import { Field, Formik } from "formik";
import * as Yup from 'yup';

const YoutubeForm=()=>{
  const initialValues={
    name:'',
    email:'',
    channel:''
  }
  const validationSchema=Yup.object({
    name:Yup.string().required("Required!"),
    email:Yup.string()
    .required('Required !')
    .email("Not a valid email"),
    channel:Yup.string().required("Required!")
  
})
const onSubmit=(values)=>{

}
return(
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    <>
        <div className="YoutubeForm-contrl">
        <label htmlFor="name">Name</label>
        <Field type='text' id='name' name="name"/>
        </div>

        <div className="YoutubeForm-contrl">
        <label htmlFor="email">Email</label>
        <Field type="email" id='email' name="email"/>
        </div>

        <div className="YoutubeForm-contrl">
        <label htmlFor="channel">Channel</label>
        <Field type='text' id='channel' name='channel'/>
        </div>
        </>
  </Formik>
)

}

export default YoutubeForm;