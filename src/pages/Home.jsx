import React from 'react'

const Home = () => {
  return (
    <>
    <section className='min-h-180 bg-blue-50 flex mb-0 md:mb-18'>
      <div className='max-w-420 mx-auto block md:flex items-center  mt-12 md:mt-18 gap-12'>
        <div className='mt-8 md:mt-0 md:py-0 p-2 md:p-4'>
          <img src="/public/home-page-image.jpg" alt="hero image" className='w-190 md:h-120 bg-cover rounded-md md:rounded-2xl'/>
        </div>
        <div className='  p-4'>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-800 leading-10 md:leading-16 mb-2 md:mb-7'>Buy a domain name, <br /> get a FREE website and email</h1>
          <p className='text-xl mb-0 md:mb-2'>Get a free website builder and custom domain email when you buy a domain name.</p>
          <ul className='text-lg leading-8 text-gray-400 list-decimal p-6 mb-4 md:mb-8'>
            <li className='text-gray-600 '>Ecommerce-ready to launch and grow your online store</li>
            <li className='text-gray-600'>Accept online bookings with ease</li>
            <li className='text-gray-600'>Custom domain email included at no extra cost</li>
            <li className='text-gray-600'>Free hosting optimized for speed, security & SEO</li>
          </ul>

          <div className='block md:flex items-center gap-3'>
            <button className='px-18 py-3 bg-blue-500 text-white text-lg font-medium rounded-md hover:bg-blue-700 cursor-pointer w-full md:w-1/3 mb-4 md:mb-0'>START NOW</button>
            <p className='text-xl '>Trusted by 3 million websites for 10+ years.</p>
          </div>
        </div>
      </div>
    </section>

    <div className='text-center mb-16 hidden md:block'>
      <h2 className='text-3xl font-bold mb-6'>Free website plans, and beyond.</h2>
      <p className='text-lg font-semibold text-gray-700 w-6xl mx-auto mb-8'>From start to finish, the Website.com builder provides all the features you need to create your entire website for free. When you're looking to advance to the next level, we've got the premium website features to extend your business.</p>
      <button className='px-8 py-2.5 text-lg font-semibold bg-gray-500 text-white rounded-md cursor-pointer hover:bg-gray-600'>Create Free Website
      </button>
    </div>
    </>
  )
}

export default Home