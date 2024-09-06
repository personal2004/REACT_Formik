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
# Notes
The validate function in Formik runs during:

1. Form submission.
2. Field value changes.
3. Field blur events1.

* To prevent validation on submit, use $$\color{red}{validateOnSubmit&nbsp;prop&nbsp; or&nbsp;  validateOnBlur&nbsp; prop&nbsp; or&nbsp; validateOnChange&nbsp; prop}$$ set to false. Formik’s submit function won’t execute if there are validation errors