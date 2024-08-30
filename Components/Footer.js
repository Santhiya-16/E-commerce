import React from 'react'

const Footer = () => {
  const year=new Date();
  return (
    <div className='bg-light text-center'>
        
        <h4>fashion</h4>
        <p>www.fashion.com</p>
      <p>Copyright&copy;{year.getFullYear()}</p>
    </div>
  )
}

export default Footer
