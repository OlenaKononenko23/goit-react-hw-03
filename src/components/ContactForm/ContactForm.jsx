import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import css from './ContactForm.module.css';

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: ''
};

export default function ContactForm({contacts, setContacts}) {
    const nameFieldId = useId();
    const telFieldId = useId();
    
    const handleSubmit = (values, actions) => {
        setContacts([...contacts, { ...values, id: nanoid() }]);
		console.log(values);
		actions.resetForm();
	};

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactFormSchema}>
            <Form>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="name" id={nameFieldId} />
                <ErrorMessage name="name" component="div" />
                
                <label htmlFor={telFieldId}>Number</label>
                <Field type="tel" name="number" id={telFieldId} />
                <ErrorMessage name="number" component="div" />

				<button type="submit">Add contact</button>
			</Form>
        </Formik>
    );
}