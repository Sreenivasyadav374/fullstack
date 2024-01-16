import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 const SignupForm = () => {
   return (

     <Formik
       initialValues={{ email: '',password:'' }}
       validationSchema={Yup.object({
         
         email: Yup.string().email('Invalid email address').required('Required'),
         password: Yup.string().password('Enter diff').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
      <div style={{height:'43.44rem'}} className='d-flex align-items-center justify-content-center'>
       <Form className='d-flex flex-column justify-content-center align-items-center border border-dark rounded'>
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />
         <label htmlFor="password">Password</label>
         <Field name="password" type="password" />
         <ErrorMessage name="password" />

 
         <button type="submit">Submit</button>
       </Form>
       </div>
     </Formik>
     
   );
 };
 export default SignupForm;