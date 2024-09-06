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

## Notes

# Top-level-validation

The validate function in Formik runs during:

1. Form submission.
2. Field value changes.
3. Field blur events1.

* To prevent validation on submit, use the $$\color{red}{validateOnSubmit}$$ prop or the $$\color{red}{validateOnBlur}$$ prop or the $$\color{red}{validateOnChange}$$ prop set to false. Formik’s submit function won’t execute if there are validation errors

# Field-Level-Validation

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

# Usage
npm start