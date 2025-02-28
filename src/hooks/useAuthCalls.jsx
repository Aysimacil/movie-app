import { useDispatch } from 'react-redux';
import { fetchFail, fetchStart, isActive, loginSuccess, logoutSuccess, registerSuccess } from '../features/authSlice';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../auth/firebase';
import { toastErrorNotify, toastSuccessNotify, toastWarningNotify } from '../helpers/ToastNotify';
import { useNavigate } from 'react-router-dom';

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (values) => {
    const { email, password } = values;
    dispatch(fetchStart());
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSuccess());
      toastSuccessNotify('Welcome');
      navigate(-1);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify('Something went wrong');
    }
  };
  const register = async (values) => {
    const { name, surname, email, password } = values;
    dispatch(fetchStart());
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(registerSuccess());
      toastSuccessNotify('Welcome');
      navigate('/');
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify('Something went wrong');
    }
  };
  const logout = () => {
    signOut(auth);
    dispatch(logoutSuccess());
    navigate('/login');
    toastWarningNotify('You are logged out !');
  };

  const signUpGoogle = async () => {
    const provider = new GoogleAuthProvider();
    dispatch(fetchStart());
    try {
      await signInWithPopup(auth, provider);
      dispatch(loginSuccess());
      navigate(-1);
      toastSuccessNotify('Welcome');
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify('Something went wrong');
    }
  };
  const userObserver = () => {
    dispatch(fetchStart());

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const activeUser = {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        };
        dispatch(isActive(activeUser));
      }else {
        dispatch(fetchFail())
      }
    });
  };

  return { login, register, logout, signUpGoogle, userObserver };
};

export default useAuthCalls;
