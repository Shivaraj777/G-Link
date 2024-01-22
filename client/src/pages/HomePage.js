import React from 'react';
import Landing from '../components/Landing';
import DefaultLayoutHoc from '../layout/DefaultLayoutHoc';

function HomePage() {
  return (
    <>
      <Landing />
    </>
  )
}

export default DefaultLayoutHoc(HomePage);