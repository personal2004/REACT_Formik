# Getting Started with Create React App

Formik-lib-preactice

## Installations

1. npm install formik
2. npm install yup
3. npm install react-router-dom

## Concepts

1. useFormik hook

2. Managing form state,handling form submission and form validation
  * initialValues object + formik.handleChange
  * onSubmit method + formik.handleSubmit
  * Validate function
  * ValidationSchema object with yue lib
  * formik.errors and formik.touched
  * Reducing boilerPlate
    - ...formik.getFieldProps('nameofField')

3. Formik Components
  * Formik
  * Form
  * Field
  * ErrorMessage
  * FieldArray
     - fieldArrayProps
  * FastField
     - FastField in Formik is an optimized version of Field, designed for large forms or expensive validations. It minimizes re-renders by updating only when its specific state changes

4. Edit Function
   * onclick of edit button take value from api and it is stored in useState in common to both page and set in form {()=>setFormValues(savedvalues)} 
   * on Formik Component use
     - initialValues={FormValues || initialValues} => here FormValues from api will be null till values from api and 
     if it not null set FormValues otherwise or set initialValues.
     - enableReinitialize
       * on useFormik hook use
         -enableReinitialize:true

5. Reset Function
  * onclick of Reset button with type as reset use onClick={() => formik.resetForm()}
  * After form submission need to reset meanse use on OnSubmit function

  ```jsx
      onSubmit=(values,onSubmitPropps)=>{
         onSubmitPropps.setSubmitting(false)
         onSubmitPropps.resetForm()
        }
  ```
6. Reusable Formik Controls
   * FormikContainer component
   * FormikControl component
   * Input
   * TextArea
   * Select
   * RadioButtons
   * Checkboxes
   * DatePicker
   * Registration,Login and Course Enrollement 
   * UI Component library 

# Notes

## Top-level-validation

The validate function in Formik runs during:

1. Form submission.
2. Field value changes.
3. Field blur events.

* To prevent validation on submit, use the $$\color{red}{validateOnSubmit}$$ prop or the $$\color{red}{validateOnBlur}$$ prop or the $$\color{red}{validateOnChange}$$ prop set to false. Formik’s submit function won’t execute if there are validation errors

## Field-Level-Validation

* Field-level validation is useful when you need to validate individual fields independently. This can help improve performance and user experience by providing immediate feedback as users interact with each field and below is the example

```jsx
const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};
<Field name="email" validate={validateEmail}> 
```

## Manually Triggering Validation

* To manually trigger validation in Formik, we use validateForm() and set setFieldTouched(field, true, true) to mark fields as touched. This ensures both field and form-level validations run correctly and the sample given below

``` jsx
// Trigger validation for a specific field
formik.setFieldTouched('fieldName', true, true);
formik.validateField('fieldName');

// Trigger validation for the entire form
formik.setTouched({ ...formik.touched, fieldName: true });
formik.validateForm();

```
# Button Disable

## Simple Validation form

 * validateOnMount use to check error on initial 
 * formik props used
   - isValid => It is linked to error and It is Read-Only

## Comples Validation form

  * formik props used
  - dirty =>It only turn true when form is changed from initial stage
  - isVisible => It is linked to error and It is Read-Only
 ```jsx
   <button type='submit' disabled={!formik.dirty && formik.isValid}>Submit</button>
 ```
## To disable button still backgroung operation complete i.e.. hit the api

  ``` jsx
  const onSubmit=(values,onSubmitProps)=>{
    onSubmitProps.setSubmitting(false)
  }
  <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
  ```
# Usage
npm start