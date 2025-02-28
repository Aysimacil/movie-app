import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';
import MovieDetail from '../pages/MovieDetail';
import PrivateRouter from './PrivateRouter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useAuthCalls from '../hooks/useAuthCalls';
import { useEffect } from 'react';
const AppRouter = () => {
 const  {userObserver} = useAuthCalls()

  useEffect(() => {
    userObserver()
  }, [])
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/search/:query' element={<Search />} />
        <Route path='/detail/:id' element={<PrivateRouter />}>
          <Route path='' element={<MovieDetail />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
