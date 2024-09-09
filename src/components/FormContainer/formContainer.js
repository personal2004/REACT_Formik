import { Formik,Form } from "formik";
import * as Yup from 'yup';
import FormikControl from "../FormikControl/formikControl";

const FormikContainer=()=>{
    const option=[
        {key:'Select an Option...', value:''},
        {key:'Option1',value:'sOption1'},
        {key:'Option2',value:'sOption2'},
        {key:'Option3',value:'sOption3'},
    ]
    const radioption=[
        {key:'Select an Option...', value:''},
        {key:'Option1',value:'rOption1'},
        {key:'Option2',value:'rOption2'},
        {key:'Option3',value:'rOption3'},
    ] 
    const checkboxption=[
        {key:'Option1',value:'cOption1'},
        {key:'Option2',value:'cOption2'},
        {key:'Option3',value:'cOption3'},
    ]  
    const initialValues={
        email:'',
        description:'',
        selectoption:option[0].value,
        radiooption:'',
        checkbox:[],
        birthdate:null,
    };
    const validationSchema=Yup.object({
        email:Yup.string()
        .required('Required !')
        .email('Give Correct Email'),
        description:Yup.string().required('Required !'),
        selectoption:Yup.string().required('Required !'),
        radiooption:Yup.string().required('Required !'),
        checkbox:Yup.array().required('Required !'),
        birthdate:Yup.date().required('Required !').nullable(),
    });

    const onSubmit=(values)=>(console.log(values));
    return(
        <div>
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} >
            {
                formik=>(
                    <Form>
                        <FormikControl control='input' label='Email' type="email" name="email"/>
                        <FormikControl control='textarea' label='Description'  name="description"/>
                        <FormikControl control='select' label='Select Option' name='selectoption'options={option}/>
                        <FormikControl control='radio' label='Radio Topic' name='radiooption'options={radioption}/>
                        <FormikControl control='checkbox' label='CheckBoxes Topic' name='checkbox'options={checkboxption}/>
                        <FormikControl control='date' label='Pick a Date' name='birthdate'/>                        
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
        </div>
    );
}
export default FormikContainer;