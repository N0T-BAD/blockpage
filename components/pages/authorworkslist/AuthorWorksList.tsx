import React, { useState } from 'react'
import AuthorListCategory from './AuthorListCategory';
import AuthorSubCategory from './AuthorSubCategory';

const AuthorWorksList = () => {

  const [active, setActive] = useState('');
  const [defaultActive] = useState("웹툰 조회");

  return (
    <>
      <AuthorListCategory active={active} setActive={setActive} defaultActive={defaultActive} />
      <AuthorSubCategory active={active} defaultActive={defaultActive} />
    </>
  )
}

export default AuthorWorksList;