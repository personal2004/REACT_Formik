import { Formik } from "formik";
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

  </Formik>
)

}

export default YoutubeForm;