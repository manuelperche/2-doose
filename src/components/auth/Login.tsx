import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputField from '../ui/InputField';
import { AuthContext } from './AuthProvider';
import { auth } from '../../utils/firebase';
import Loader from 'react-loader-spinner';
import * as Yup from 'yup';

interface LoginForm {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Please type your email'),
  password: Yup.string().required('Please type your password'),
});

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (data: LoginForm, { setStatus }: any) => {
    try {
      const user = await auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      authContext.setUser(user);
      history.push('/dashboard');
    } catch (err) {
      setStatus({ error: err.message });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="jumbotron col-11 p-3 col-md-7 mt-5 m-md-5">
          <h2 className="text-center">Login</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
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
                  name="email"
                  type="email"
                  label="Email address"
                  placeholder="Enter email"
                  as={InputField}
                  error={errors.email}
                />
                <Field
                  name="password"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  as={InputField}
                  error={errors.password}
                />
                <button
                  type="submit"
                  className="btn btn-info btn-lg btn-block mt-4"
                >
                  {isSubmitting ? <Loader type="Oval" color="#00BFFF" height={20} width={20}/> : 'Log in'}
                </button>
                {status && status.error ? (
                  <small className="form-text text-center mt-3 text-danger">
                    {status.error}
                  </small>
                ) : null}
              </Form>
            )}
          </Formik>
          <div className="mt-4">
            <p className="text-center">
              Want to create an account? <Link to="/register"> Register </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
