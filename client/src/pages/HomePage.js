import React, { Suspense, useEffect, useState } from 'react';
import DefaultLayoutHoc from '../layout/DefaultLayoutHoc';
import { useDispatch, useSelector } from 'react-redux';
import { ACCESS_TOKEN_KEY, verifyToken } from '../utils';
import { getCurrentUser } from '../redux/user/user.action';
import { clearAuthStore } from '../redux/auth/auth.action';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import { fetchUserChats } from '../redux/chat/chat.action';

// dynamic imports
const Landing = React.lazy(() => import('../components/Landing'));
const Chat = React.lazy(() => import('../components/chat/Chat'));

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState();

  // get global user data from store
  const user = useSelector((state) => state.user.userDetails);
  // console.log(user);

  // get current user data
  const getuserData = async () => {
    await dispatch(getCurrentUser());
    await dispatch(fetchUserChats());
  }


  // check for user authentication
  useEffect(() => {
    if(localStorage[ACCESS_TOKEN_KEY] && verifyToken()){
      getuserData();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }else{
      dispatch(clearAuthStore());
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      console.log('Access token key not found');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // update user account verification status
  useEffect(() => {
    if(user){
      setStatus(user.is_verified);
    }
  }, [user]);


  /* 
    handle user account verification 
    if verification status is false -->. navigate to user verification page 
  */
  useEffect(() => {
    if(status === undefined){
      return;
    }

    if(!status){
      navigate('/user/verification');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);


  return (
    <>
      {loading ? (
        <>
          <Loading loading={loading} />
        </>) : (
          <>
            {user?._id ? (
              <>
                <Suspense fallback={<Loading loading={loading} />}>
                  <Chat />
                </Suspense>
              </>) : (
                <>
                  <Suspense fallback={<Loading loading={loading} />}>
                    <Landing />
                  </Suspense>
                </>
              )
            }
          </>
        )
      }
    </>
  )
}

export default DefaultLayoutHoc(HomePage);