import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function DogImage() {
  const [image, setImage] = useState("");

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const curr = await axios.get("https://dog.ceo/api/breeds/image/random");
    setImage(curr.data.message);
  }
  return (
    <div className="m-2">
      {
        image === "" ?
          <img alt="loading" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" className="h-40 p-2 border-4 rounded-2xl  border-black	" /> :
          <img alt="a dog" src={image} className="h-40 p-2 border-4 rounded-2xl  border-black	" />

      }
    </div>
  )
}
