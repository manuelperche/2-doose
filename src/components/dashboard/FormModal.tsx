import { Formik, Form, Field } from 'formik';
import React from 'react';
import Loader from 'react-loader-spinner';
import InputField from '../ui/InputField';
import * as Yup from 'yup';
import { auth, db } from '../../utils/firebase';
import firebase from 'firebase';

const TodoSchema = Yup.object().shape({
  todo: Yup.string()
    .min(5, 'To-Do is too short')
    .required('Please type your To-Do')
});

const FormModal = ({ close }: any) => {
  const initialValues = {
    todo: '',
    color: 'info'
  };

  const handleSubmit = async (data: any) => {
    const todo = {
      color: data.color,
      todo: data.todo,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }
    try {
      await db.collection('users').doc(auth.currentUser?.uid).collection('todos').add(todo)
      close()
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add To-Do</h5>
        <button className="close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="p-2 p-md-3">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={TodoSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({
            errors,
            status,
            isSubmitting,
          }) => (
            <Form>
              <Field
                name="todo"
                type="text"
                label="To-Do"
                placeholder="Enter To-Do"
                as={InputField}
                error={errors.todo}
                autofocus="autofocus"
              />
              <label className="mb-3">Pick a To-Do color</label>
              <div className="d-flex justify-content-around px-md-5 btn-group">
                <label className="btn btn-info py-3">
                  <Field type="radio" name="color" value="info" />
                </label>
                <label className="btn btn-success py-3">
                  <Field type="radio" name="color" value="success" />
                </label>
                <label className="btn btn-warning py-3">
                  <Field type="radio" name="color" value="warning" />
                </label>
                <label className="btn btn-danger py-3">
                  <Field type="radio" name="color" value="danger" />
                </label>
                <label className="btn btn-primary py-3">
                  <Field type="radio" name="color" value="primary" />
                </label>
                <label className="btn btn-light py-3">
                  <Field type="radio" name="color" value="light" />
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-info btn-lg btn-block mt-4"
              >
                {isSubmitting ? <Loader type="Oval" color="#00BFFF" height={20} width={20}/> : 'Add To-Do'}
              </button>
              {status && status.error ? (
                <small className="form-text text-center mt-3 text-danger">
                  {status.error}
                </small>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
      
    </div>
  );
};

export default FormModal;
