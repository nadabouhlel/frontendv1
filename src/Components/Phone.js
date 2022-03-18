import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import "../Styles/Phone.css";

function Phone() {
  const [value , setValue] = useState();


  return (
    <div>
<PhoneInput 
className='phone'
placeholder="Enter phone number"
value={value}
onChange={setValue}
/>
{value}
</div>
    )
}

export default Phone