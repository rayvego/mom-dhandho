import React from 'react'

const Hero = ({header}: {header: string}) => {
  return (
    <div className="flex items-center text-4xl font-medium justify-center py-12">{header}</div>
  )
}

export default Hero