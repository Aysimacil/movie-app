import { useFormik } from 'formik';
import GoogleIcon from '../icons/GoogleIcon';
import { registerSchema } from '../schema/schema';
import useAuthCalls from '../hooks/useAuthCalls';

const Register = () => {
  const { register } = useAuthCalls();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values, actions) => {
      register(values);
      actions.resetForm();
    },
  });
  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className='flex h-screen justify-center'>
        <div
          className='hidden bg-cover lg:block lg:w-2/3'
          style={{
            backgroundImage: 'url(https://picsum.photos/800/800)',
          }}>
          <div className='flex h-full items-center bg-gray-900 bg-opacity-40 px-20'>
            <div>
              <h2 className='text-4xl font-bold text-white'>Eypes Movie Database</h2>
              <p className='mt-3 max-w-xl text-gray-300'>Welcome to Website</p>
            </div>
          </div>
        </div>
        <div className='mx-auto flex w-full max-w-md items-center px-6 lg:w-2/6'>
          <div className='flex-1'>
            <div className='text-center'>
              <h2 className='text-center text-4xl font-bold text-gray-700 dark:text-white'>EYPES</h2>
              <p className='mt-3 text-gray-500 dark:text-gray-300'>Sign up to create new account</p>
            </div>
            <div className='mt-8'>
              <form onSubmit={handleSubmit}>
                <div className='relative'>
                  <label htmlFor='name' className='mb-2 block text-sm text-gray-600 dark:text-gray-200'>
                    First Name
                  </label>
                  <input
                    value={values.name}
                    onChange={handleChange}
                    type='text'
                    name='name'
                    id='name'
                    placeholder='First Name'
                    className='input-box-login-register'
                  />
                  <p className='error-msg-par'>{errors?.name} </p>
                </div>

                <div className='relative mt-6'>
                  <label htmlFor='surname' className='mb-2 block text-sm text-gray-600 dark:text-gray-200'>
                    Last Name
                  </label>
                  <input
                    value={values.surname}
                    onChange={handleChange}
                    type='text'
                    name='surname'
                    id='surname'
                    placeholder='Last Name'
                    className='input-box-login-register'
                  />
                  <p className='error-msg-par'>{errors?.surname} </p>
                </div>

                <div className='relative mt-6'>
                  <label htmlFor='email' className='mb-2 block text-sm text-gray-600 dark:text-gray-200'>
                    Email Address
                  </label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    type='email'
                    name='email'
                    id='email'
                    placeholder='example@example.com'
                    className='input-box-login-register'
                  />
                  <p className='error-msg-par '>{errors?.email} </p>
                </div>
                <div className='relative mt-6'>
                  <div className='mb-2 flex justify-between'>
                    <label htmlFor='password' className='text-sm text-gray-600 dark:text-gray-200'>
                      Password
                    </label>
                  </div>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Your Password'
                    className='input-box-login-register'
                  />
                  <p className='error-msg-par'>{errors?.password} </p>
                </div>
                <div className='mt-10'>
                  <button className='sign-button' type='submit'>
                    Sign Up
                  </button>
                </div>
                <div className='mt-6'>
                  <button type='button' className='sign-with-google-button'>
                    <GoogleIcon />
                    Continue with Google
                  </button>
                </div>
              </form>
              <p className='mt-6 text-center text-sm text-gray-400'>
                Do you have an account ?{' '}
                <a href='#' className='text-blue-500 hover:underline focus:underline focus:outline-none'>
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
