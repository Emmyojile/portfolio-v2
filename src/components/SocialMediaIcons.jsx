
const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        // href='https://linkedin.com/in/'
        href='https://www.linkedin.com/in/ojile-emmanuel-6847a524b/'
        target='_blank'
        rel='noreferrer'
      >
        <img src='/assets/linkedin.png' alt='linkedin-link'/>
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://twitter.com/EmmanuelOjile7?t=KIx7XpTtGbiSs75UUrUJfQ&s=09'
        target='_blank'
        rel='noreferrer'
      >
        <img src='/assets/twitter.png' alt='twitter-link'/>
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/Emmyojile'
        target='_blank'
        rel='noreferrer'
      >
        <img src='/assets/github.png'
         alt='github-link'
         className='bg-white text-black'
         />
      </a>
      
    </div>
  )
}

export default SocialMediaIcons