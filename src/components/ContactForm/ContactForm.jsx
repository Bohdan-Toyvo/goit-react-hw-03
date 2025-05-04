import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import 'yup-phone-lite';
import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .phone('UA', 'Invalid phone number for Ukraine')
    .required('Required!'),
});

export default function ContactForm({ addContact }) {
  const nameInputId = useId();
  const numberInputId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={nameInputId}>
            Name
          </label>
          <Field
            className={css.input}
            id={nameInputId}
            name="name"
            type="text"
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.formGroup}>
          <label className={css.label} htmlFor={numberInputId}>
            Number
          </label>
          <Field
            className={css.input}
            id={numberInputId}
            name="number"
            type="tel"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
