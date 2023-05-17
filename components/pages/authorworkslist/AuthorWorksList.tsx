import React, { useState } from 'react'
import AuthorListCategory from './AuthorListCategory';
import AuthorSubCategory from './AuthorSubCategory';

const AuthorWorksList = () => {

  const [active, setActive] = useState('');

  return (
    <>
      <AuthorListCategory active={active} setActive={setActive} />
      <AuthorSubCategory active={active} />
    </>
  )
}

export default AuthorWorksList;