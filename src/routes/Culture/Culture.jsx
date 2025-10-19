'use client'

import React, { useEffect, useState } from 'react'

const Culture = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://apis-repository-sm.vercel.app/api/empire/culture'
        )
        const result = await res.json()

        // // Convertir idNum a número una sola vez
        // const parsedData = result.map((item) => ({
        //   ...item,
        //   idNum: Number(item.idNum), // 👈 convierte string a number
        // }))
        const sorted = result.sort((a, b) => a.idNum - b.idNum)
        setData(sorted)
      } catch (error) {
        console.error('Error fetching culture data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-[var(--primary-gold)]">
        <p>Loading culture data...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {data.map((item) => {
        const isEven = item.idNum % 2 === 0
        const bgColor = isEven
          ? 'bg-[var(--primary-red)]'
          : 'bg-gradient-to-tr from-[var(--dark-purple)] to-[var(--primary-purple)]'

        return (
          <div
            key={item.idNum}
            className={`${bgColor} text-[var(--primary-gold)] py-16 px-4`}
          >
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center">
              {/* Imagen */}
              <img
                className={`h-[300px] md:h-[400px] lg:h-[500px] p-4 mx-auto my-4 rounded-[20%] ${
                  isEven ? 'order-1 md:order-2' : 'order-1'
                }`}
                src={item.image}
                alt={item.section}
              />

              {/* Texto */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col justify-center m-8 hover:scale-105 transition-transform duration-300 bg-black/50 p-6 rounded-3xl ${
                  isEven ? 'order-2 md:order-1' : 'order-2'
                }`}
              >
                <p className="font-bold">{item.section}</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  {item.title}
                </h1>
                <p>{item.p1}</p>
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Culture
