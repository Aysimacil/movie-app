import { useDispatch } from 'react-redux';
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from '../features/authSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth/firebase';

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const login = async (values) => {
    const { email, password } = values;
    dispatch(fetchStart());
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user)
      dispatch(loginSuccess());
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const register =async (values) =>{
    const {name, surname , email, password}= values;
    dispatch(fetchStart())
    try {
        const user =await createUserWithEmailAndPassword(auth,email,password)
        console.log(user?.user)
        dispatch(registerSuccess())
    } catch (error) {
        dispatch(fetchFail())
    }
  }
  return {login, register}
};

export default useAuthCalls;
