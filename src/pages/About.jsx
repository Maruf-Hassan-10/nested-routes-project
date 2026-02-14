// import React, { useState } from 'react'
const About = () => {

  // const [loading, setLoading] = useState(true)
  // const loading = () => {
  //   setLoading(false)
  // }

  return (
    <div className='min-h-300 bg-gray-50'>
      <div className='max-w-330 mx-auto p-2 md:p-0 py-20 md:py-26'>
        <h2 className='text-2xl md:text-3xl font-semibold text-cyan-600 text-center mb-2'>About Us</h2>
        <p className='text-lg font-medium text-gray-700 text-center mb-12'> Consequatur, quam? 27 best About Us and About Me page examples [+ templates]</p>

        {/* {
          loading && <p>Loading...</p>
        } */}
        
        <div className=''>
          <h3 className='text-3xl md:text-4xl font-semibold mb-4'>What makes a good About page?</h3>
          <p className='text-lg mb-6'>Like any part of the website, your About page needs to be visually pleasing and well structured. But the true characteristic of a good About page is authentic and interesting content. It’s an opportunity to set the stage for clients, and show them not just what you do, but why they would want to work with you. Similarly, potential employees might visit this page to get a sense of team culture and corporate values to learn why they should work for you.</p>
        </div>
        <img src="/public/about-img.jpg" alt="about image" className='w-full md:h-180 rounded-md'/>

        <figcaption className='text-lg py-4 mb-4'>When I’m working with a client on redesigning or optimizing their website, the “About Us” page comes pretty far down the priority list. We tend to spend a lot more time on the “high visibility” pages like the homepage or services pages. But that doesn’t mean the About Us page isn’t important, and I think it still deserves the same level of care and attention. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, ab. Molestiae eius velit laborum ullam vero eligendi corrupti sunt dolores!</figcaption>

        <div className='md:w-5xl mx-auto p-0 md:p-2'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4'>Establish your mission statement.</h3>
          <p className='text-lg mb-4'>The About page is the perfect spot to highlight your mission statement. What really makes your brand tick, and what is your company ultimately setting out to do? It sets the brand and the rest of the About page.Take a look the asterisk note that highlights the brand’s inclusive approach to athletics and sports.</p>
          <p className='text-lg'>Not every brand has a funny or interesting founding story, and that’s okay. Don’t get me wrong: If you do have an interesting founding story, by all means, tell it. But that doesn’t mean you can’t build an engaging and effective the same.One example I like is Miro’s About page. There’s no grand lightning-bolt moment or cute family-founded business history. It’s just an authentic behind the software and brand, highlighting the founder’s personal experience in the industry and how he built the software to tackle real-world challenges that will resonate with potential customers.</p>

          <h4 className='text-xl font-semibold p-1 mb-2 md:mb-4 mt-4 md:mt-6'>Table of Contents</h4>
          <ul className='text-lg list-disc font-medium md:underline px-6 leading-8 md:leading-12'>
            <li>What makes a good About page?</li>
            <li>How to Write a Winning About Page: A Plug-and-Play Guide</li>
            <li>7 Tips for Designing a Beautiful + Functional About Page</li>
            <li>About Us Page Templates and Examples</li>
            <li>About Me Page Templates and Examples</li>
            <li>Frequently Asked Questions on About Pages</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About