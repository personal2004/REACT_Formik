import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import * as Yup from 'yup';
import "./index.css";
import TextError from "./error";

const YoutubeForm=()=>{

  const initialValues={
    name:'',
    email:'',
    channel:'',
    comment:'',
    address:'',
    socia:{
      facebook:'',
      twitter:'',
    },
    checkbox:['',''],
    phnumbers:['']
  }

  const validationSchema=Yup.object({
    name:Yup.string().required("Required!"),
    email:Yup.string()
    .required('Required !')
    .email("Not a valid email"),
    channel:Yup.string().required("Required!"),
    comment:Yup.string().required('Required!')
  
})
const onSubmit=(values)=>{

}
return(
  <div className="youtube_form">
  <Formik 
  initialValues={initialValues} 
  validationSchema={validationSchema} 
  onSubmit={onSubmit} 
  validateOnMount>
    {
      (formik)=>{
        return(
          <div className="youtube_form_content">

          <div className="YoutubeForm-contrl">
            <label htmlFor="name">Name</label>
            <Field type='text' id='name' name="name" placeholder='Enter your name'/>
            {/* Error will be shown as text to ewap it in div or other component we use */}
            <ErrorMessage name="name" component='div'/>
          </div>
  
          <div className="YoutubeForm-contrl">
              <label htmlFor="email">Email</label>
              <Field type="email" id='email' name="email" placeholder="Enter email_id"/>
              <ErrorMessage name="email"component={TextError}/>
          </div>
  
          <div className="YoutubeForm-contrl">
            <label htmlFor="channel">Channel</label>
            <Field type='text' id='channel' name='channel' placeholder="Enter Channel Name"/>
            <ErrorMessage name="channel" component={TextError}/>
          </div>
           
          <div className="YoutubeForm-contrl">
            <label htmlFor="comment">Comment</label>
            {/* as prop accept what element what element to render and component can be used but it can be duplicated or unduplicated so as prefered */}
            <Field as='textarea' id='comment' name='comment' placeholder="Enter Your Comment "/>
            <ErrorMessage name="comment" component={TextError}/>
          </div>
                   
          <div className="YoutubeForm-contrl">
            <label htmlFor="facebook">FaceBook</label>
            <Field type='text' id='facebook' name='social.facebook' placeholder="Enter Facebook Account "/>
            <ErrorMessage name="social.facebook" component={TextError}/>
          </div>
  
           <div className="YoutubeForm-contrl">
            <Field type='checkbox'name='checkbox[0]' id="facebook"/>
            <label htmlFor="facebook">Whether Used FaceBook</label>
            <Field type='checkbox' name='checkbox[1]' id="youtube"/>
            <label htmlFor="youtube">Whether Used   youtube</label>
           </div>
  
            <div className="YoutubeForm-contrl">
            <label htmlFor="phnumbers">Add Phone Number</label>
            {/* To dynamically add phone number in array use FieldArray */}
            <FieldArray id="phnumbers" name="phnumbers">
             {
                (fieldArrayProps)=>{
                      const {form,remove,push}=fieldArrayProps;
                      const {values}=form;
                      const {phnumbers}=values;
                      return(
                          phnumbers.map((phnumber,index)=>{
                            return(
                            <div key={index}>
                            <Field type='text' name={`phnumbers[${index}]`}/>
                            {index>0 && <button onClick={()=>{remove(index)}}>-</button>}
                            <button onClick={()=>{push('')}}>+</button>
                            </div>
                            );
                          })
                      );
                }
             }
            </FieldArray>
            </div>
  
           <div className="YoutubeForm-contrl">
            <label htmlFor="address">Comment</label>
            {/* In Render prop way we give arrow function as children to element and children input not linked to formik so we use props to take value from formik */}
            <Field  name='address'>
              {
              (props)=>{
                const {field,form,meta}=props;
                return (
                  <>
                    <input type="text" id="address"{...field}></input>
                    {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                    <pre>{JSON.stringify(form.values, null, 1)}</pre>
                  </>
                )
              }
              }
            </Field>     
          </div>
  
          <button className='form_submit_button' type='submit' disabled={formik.isValid}>Submit</button>
      </div>
        );
      }
    }
  </Formik>
  </div>
)

}

export default YoutubeForm;