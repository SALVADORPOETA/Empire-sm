'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AboutCard from './AboutCard'
import RomanCard from './RomanCard'

const CardContainer = () => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiURL = 'https://apis-repository-sm.vercel.app/api/empire/home'
    axios
      .get(apiURL)
      .then((response) => {
        // Ordenar los items por idNum si existe
        const sorted =
          response.data?.sort((a, b) => (a.idNum ?? 0) - (b.idNum ?? 0)) ?? []
        setCards(sorted)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error)
        setLoading(false)
      })
  }, [])

  const SkeletonSection = () => {
    return (
      <div className="animate-pulse">
        <div className="bg-gray-300 h-80 w-full rounded-md mb-4"></div>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* Card fija */}
      <RomanCard />

      {/* Cards dinámicas desde la API */}
      {loading
        ? Array(8)
            .fill(0)
            .map((_, index) => <SkeletonSection key={index} />)
        : cards.map((item) => (
            <AboutCard
              key={item.idNum}
              link={item.link}
              image={item.image}
              section={item.section}
              p1={item.p1}
            />
          ))}
    </div>
  )
}

export default CardContainer
