import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters'),
  number: Yup.string()
    .required('Phone number is required')
    .min(3, 'Phone must be at least 3 characters')
    .max(50, 'Phone must be at most 50 characters'),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.form}>
          <div>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <Field type="text" id="name" name="name" className={s.field} />
            <ErrorMessage
              name="name"
              component="div"
              className={s.errorMessage}
            />
          </div>
          <div>
            <label className={s.label} htmlFor="number">
              Phone Number
            </label>
            <Field type="text" id="number" name="number" className={s.field} />
            <ErrorMessage
              name="number"
              component="div"
              className={s.errorMessage}
            />
          </div>
          <button type="submit" className={s.button}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
