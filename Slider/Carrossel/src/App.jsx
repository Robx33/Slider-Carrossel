import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'
import './App.css'
import image1 from '../src/images/img1.jpg'
import image2 from '../src/images/img2.jpg'
import image3 from '../src/images/img3.jpg'
import image4 from '../src/images/img4.jpg'
import image5 from '../src/images/img5.jpg'

const images = [image1, image2, image3, image4, image5]

function App() {

  const carrossel = useRef()
  const [width, setWidth] = useState()

  useEffect(() => {
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  return (
    <div className="container">

      <motion.div ref={carrossel} className='carrossel' whileTap={{ cursor: 'grabbing' }}>
        <motion.divc 
        className='inner' 
        drag='x' 
        dragConstraints={{ right: 0, left: - width}}
        initial={{ x: 100}}
        animate={{ x: 0}}
        transition={{ duration: 0.8}}
        >

          {images.map(image => (
            <motion.div className='item' key={image}>
              <img src={image} alt="Text Alt" />
            </motion.div>
          ))}

        </motion.divc>
      </motion.div>

    </div>
  )
}

export default App
