import React from 'react'
// import "../assets/contact-img.jpg"
import '../pages/Contact.css'

const Contact = () => {
  return (
    <section className='py-18 bg-cyan-100'>
      <div className='text-center contactImg  py-6 md:py-16 inset-shadow-3xl inset-shadow-green-500 md:mb-20 '>
        {/* <div className=''></div> */}
        <h2 className='text-2xl md:text-3xl font-bold text-pink-400 mb-4 md:mb-8'>Contact US</h2>
        <p className='md:w-3xl mx-auto text-lg font-semibold md:text-xl text-gray-200'>1,449 inspirational designs, illustrations, and graphic elements from the world’s best designers.
        Want more inspiration? Browse our search results...</p>
      </div>
        

        <div className='max-w-230 bg-cyan-50 md:h-140 mx-auto shadow-md p-2 md:p-14 border border-gray-200 block md:flex items-center justify-center'>

          <div className='md:w-2/4 mb-14'>
          <h3 className='text-3xl md:text-5xl font-semibold mt-6 md:mt-0 mb-2 md:mb-6'>Get in touch</h3>
          <p className='text-xl text-gray-600 flex md:w-sm mb-2'>We are committed to processing the information in order to contact you and talk about your project.</p>

          <ul className='list-disc p-5 md:p-6 text-lg md:text-xl'>
            <li className='mb-2 md:mb-4'>webdeveloper@gmail.com</li>
            <li className='mb-2 md:mb-4'>ABC,Nawabganj,Rajshahi,Bangladesh.</li>
            <li>+880 123 456 7890</li>
          </ul>
        </div>

        <div className='md:w-2/4 space-y-6'>
          <div className=''>
          {/* <label className='block'>Name:</label> */}
          <input type="text" name="text" id="text" placeholder='Your name' className='p-2 border-2 text-gray-500 border-blue-400 outline-emerald-400 rounded w-full'/>
        </div>
        <div className=''>
          {/* <label className='block'>Email:</label> */}
          <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 border-2 text-gray-500 border-blue-400 outline-emerald-400 rounded w-full'/>
        </div>
        <div className=''>
          {/* <label className='block'>Phone:</label> */}
          <input type="number" name="number" id="number" placeholder='Phone: 013********' className='p-2 border-2 rounded text-gray-500 border-blue-400 outline-emerald-400 w-full'/>
        </div>
        <div className=''>
          {/* <label className='block'>Message:</label> */}
          <textarea rows={6} cols={24} name="message" id="message" placeholder='Describe your issue' className=' p-2 border-2 text-gray-500 border-blue-400 rounded outline-emerald-400 w-full'></textarea>
        </div>

        <div className='flex  md:justify-end mb-4 md:mb-0'>
          <button className='bg-green-500 w-full md:w-2/4 px-8 py-2.5 rounded-md text-lg md:text-lg font-medium  text-white hover:bg-green-600 transition-all duration-300 cursor-pointer'>Send Message</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact