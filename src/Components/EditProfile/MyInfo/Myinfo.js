import React from 'react'
import '../../../Styles/MyInfo.css'
import Savechanges from '../Savechanges'
import ContactInfo from './ContactInfo'
import ImageUpload from './ImageUpload'
import Links from './Links'
import MyIdentity from './MyIdentity'


function Myinfo() {
  return (
    <>
<ImageUpload /> 

<MyIdentity /> 
<ContactInfo />
<Links />
<Savechanges />

</>


)
}

export default Myinfo