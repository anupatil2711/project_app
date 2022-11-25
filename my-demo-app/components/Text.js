import React from 'react'
import Typewriter from 'typewriter-effect';
  

const Text = () => {
  return (
    <div>
      <h3>Amazing things will happen when you listen to the consumer.</h3>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Amazing things will happen when you listen to the consumer.')
            .pauseFor(1000)
            .deleteAll()
            .typeString("Amazing things will happen when you listen to the heart.")
            .start();
        }}
      />
    </div>
  )
}

export default Text