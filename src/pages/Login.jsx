import GoogleIcon from '../icons/GoogleIcon';
import { useFormik } from 'formik';
import { loginSchema } from '../schema/schema';
import useAuthCalls from '../hooks/useAuthCalls';
import { useSelector } from 'react-redux';

const Login = () => {
  const {login, signUpGoogle}=useAuthCalls()
  const {loading} = useSelector(state => state.auth)
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
    login(values)  
    actions.resetForm();
    },
  });
  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className='flex h-screen justify-center'>
        <div
          className='hidden bg-cover lg:block lg:w-2/3'
          style={{
            backgroundImage: 'url(https://picsum.photos/800/800?blur=1)',
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
              <p className='mt-3 text-gray-500 dark:text-gray-300'>Sign in to access your account</p>
            </div>
            <div className='mt-8'>
              <form onSubmit={handleSubmit}>
                <div className='relative'>
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
                  <p className='error-msg-par'>{errors?.email}</p>
                </div>
                <div className='relative mt-6'>
                  <div className='mb-2 flex justify-between'>
                    <label htmlFor='password' className='text-sm text-gray-600 dark:text-gray-200'>
                      Password
                    </label>
                    <button className='text-sm text-gray-400 duration-500 hover:text-blue-500 hover:underline focus:text-blue-500 disabled:opacity-0'>
                      Forgot password?
                    </button>
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
                  <p className='error-msg-par'>{errors?.password}</p>
                </div>
                <div className='mt-10'>
                  <button className='sign-button ' type='submit'>
                    {loading ? "Loading": "Sign in"}
                  </button>
                </div>
                <div className='mt-6 flex justify-between'>
                  <button onClick={signUpGoogle} type='button' className='sign-with-google-button'>
                    <GoogleIcon />
                    Sign in with Google
                  </button>
                </div>
              </form>
              <p className='mt-6 text-center text-sm text-gray-400'>
                Don't have an account yet?{' '}
                <a href='#' className='text-blue-500 hover:underline focus:underline focus:outline-none'>
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
