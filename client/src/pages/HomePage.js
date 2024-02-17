import React, { Suspense, useEffect, useState } from 'react';
import DefaultLayoutHoc from '../layout/DefaultLayoutHoc';
import { useDispatch, useSelector } from 'react-redux';
import { ACCESS_TOKEN_KEY, verifyToken } from '../utils';
import { getCurrentUser } from '../redux/user/user.action';
import { clearAuthStore } from '../redux/auth/auth.action';
import Loading from '../components/Loading';

// dynamic imports
const Landing = React.lazy(() => import('../components/Landing'));
const Chat = React.lazy(() => import('../components/chat/Chat'));

function HomePage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // get global user data from store
  const user = useSelector((state) => state.user.userDetails);
  // console.log(user);

  // get current user data
  const getuserData = async () => {
    await dispatch(getCurrentUser());
  }


  // check for user authentication
  useEffect(() => {
    if(localStorage[ACCESS_TOKEN_KEY] && verifyToken()){
      getuserData();
      setLoading(false);
    }else{
      dispatch(clearAuthStore());
      setLoading(false);
      console.log('Access token key not found');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>) : (
          <>
            {user?._id ? (
              <>
                <Suspense fallback={<Loading />}>
                  <Chat />
                </Suspense>
              </>) : (
                <>
                  <Suspense fallback={<Loading />}>
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