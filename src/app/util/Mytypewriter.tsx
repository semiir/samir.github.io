import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export const MyTypewriter = () => {

  const handleType = (count: number) => {
    //add count
    if (count > 0) {
    console.log(count)}
  }

  const handleDone = () => {
    console.log(`Done after 10 loops!`)
  }

  return (

<section className="flex items-center justify-center w-full py-28">
      <div className="container flex flex-col items-center justify-center">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6">
          <h1 className="text-center text-5xl font-extrabold lg:text-6xl">
            Hi I'm Samir
          </h1>
          <p className="text-balance text-center text-muted-foreground text-3xl font-bold lg:text-5xl lg:max-w-xl">
          <Typewriter
            words={["a Web Developer", 
                    "a UI/UX Designer",
                    "an SEO Manager", 
                    "a Graphic Designer",
                    "a Web Designer"
                ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1300}
            onLoopDone={handleDone}
            onType={handleType}
          />
          </p>
          <p className="text-balance text-center text-muted-foreground lg:max-w-2xl text-lg">
          I'm a highly motivated and proactive individual with extensive experience as a Web Designer/Developer. I'm proficient in <strong>HTML, CSS, JavaScript, and PHP</strong>, with a strong familiarity with <strong>CMS and LMS systems</strong>, and skilled in utilizing design tools such as <strong>Adobe tools, and Sketch app</strong>. I'm committed to continuous self-improvement and dedicated to achieving success in the industry. 
          </p>
        </div>
      </div>
    </section>

  )
}