import React from 'react'

export const Footer = () => {
  let StyleFooter={
    position: "relative",
    top: "100vh",
    width: "100vw"
  }
  return (
    <div className='bg-dark text-light py-3' style={StyleFooter}>
      <p className='text-center' >
      Copyright &copy; Shaunak Shukla
      </p>
    </div>
  )
}
