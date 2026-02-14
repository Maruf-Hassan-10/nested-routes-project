import React, { useEffect, useState } from 'react'


const Services = () => {

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => response.json())
    .then(data => {
      setMeals(data.meals || [])
      setLoading(false)
    })

  }, [])
  console.log(meals);
  


  return (
    <section className='py-26 bg-gray-50 p-2'>
      <h2 className='text-3xl font-semibold text-center text-green-600'>Services Page</h2>
      <p className='text-lg font-medium text-gray-600 md:w-3xl mx-auto text-center py-4 mb-4 md:mb-'>356 inspirational designs, illustrations, and graphic elements from the world’s best designers.
         Want more inspiration? Browse our <span className='text-gray-900'>search results...</span></p>

        {
          loading && <p className='text-blue-500 text-md font-medium text-center'>Loading...</p>
        }

      <div className='max-w-330 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mt-12 gap-6'>

          {
            meals.map((meal, index) => {
              return(
                <div key={index} className='shadow-md hover:shadow-xl border border-gray-200 p-4 bg-white rounded-md hover:scale-102 transition-all duration-200 cursor-pointer'>
                  <h3 className='text-xl font-semibold text-cyan-600 mb-2'>{meal.strMeal.slice(0,22)}</h3>
                  <p className='text-md text-gray-600'>{meal.strInstructions.slice(0,150)}</p>
                </div>
              )
            })  
          }
      </div>
    </section>
  )
}

export default Services