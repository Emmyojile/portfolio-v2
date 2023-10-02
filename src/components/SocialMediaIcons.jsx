import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://linkedin.com/in/'
        target='_blank'
        rel='noreferrer'
      >
        <img src='/assets/linkedin.png' alt='linkedin-link'/>
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://twitter.com/in/'
        target='_blank'
        rel='noreferrer'
      >
        <img src='/assets/twitter.png' alt='linkedin-link'/>
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://linkedin.com/in/'
        target='_blank'
        rel='noreferrer'
      >
        <img src='/assets/github.png'
         alt='linkedin-link'
         className='bg-white rounded-sm'
         />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://linkedin.com/in/'
        target='_blank'
        rel='noreferrer'
      >
        <img src='/assets/facebook.png' alt='linkedin-link'/>
      </a>
    </div>
  )
}

export default SocialMediaIcons