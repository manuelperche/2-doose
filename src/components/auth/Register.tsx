import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import InputField from '../ui/InputField';
import { AuthContext } from './AuthProvider';
import { auth } from '../../utils/firebase';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';

interface RegisterForm {
  email: string;
  password: string;
  password2: string;
}

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email must be a valid email')
    .min(5, 'Email too short')
    .max(50, 'Email too long')
    .required('Please type your email'),
  password: Yup.string().required('Please type your password'),
  password2: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Please confirm your password'),
});

const Register: React.FC = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
    password2: '',
  };

  const handleSubmit = async (data: RegisterForm, { setStatus }: any) => {
    try {
      const user = await auth.createUserWithEmailAndPassword(
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
          <h2 className="text-center">Register</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={RegisterSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ values, handleChange, handleBlur, handleSubmit, errors, status, isSubmitting }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  label="Email address"
                  small="We'll never share your email with anyone else."
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
                <Field
                  name="password2"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                  as={InputField}
                  error={errors.password2}
                />
                <button
                  type="submit"
                  className="btn btn-info btn-lg btn-block mt-4"
                >
                  {isSubmitting ? <Loader type="Oval" color="#00BFFF" height={20} width={20}/> : 'Register'}
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
              Already have an account? <Link to="/login"> Log In </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
