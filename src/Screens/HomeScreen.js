import React from 'react'
import DogImage from '../Components/DogImage'

export default function HomeScreen() {
  return (
    <div className=" h-full p-10  flex flex-col ">
      <div className="w-full sm:flex md:flex justify-start"><DogImage /></div>
      <div className="w-full sm:flex md:flex justify-center"><DogImage /></div>

      <div className="w-full sm:flex md:flex justify-end"><DogImage /></div>

    </div>
  )
}
