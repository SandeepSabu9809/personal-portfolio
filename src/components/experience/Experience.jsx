import React from 'react'
import './experience.css'
import { PiSealCheckFill } from "react-icons/pi";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
           <article className='experience__details'>
             <PiSealCheckFill className='experience__details-icons' />
             <div>
              <h4>HTML</h4>
              <small className='text-light'>Experirenced</small>
             </div>
           </article>
           <article className='experience__details'>
             <PiSealCheckFill  className='experience__details-icons'/>
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Intermediate</small>
             </div>
           </article>
           <article className='experience__details'>
             <PiSealCheckFill className='experience__details-icons' />
             <div>
             <h4>Javascript</h4>
             <small className='text-light'>Experirenced</small>
             </div>
           </article>
           <article className='experience__details'>
             <PiSealCheckFill className='experience__details-icons' />
             <div>
             <h4>Bootstrap</h4>
             <small className='text-light'>Experirenced</small>
             </div>
           </article>
           <article className='experience__details'>
             <PiSealCheckFill className='experience__details-icons' />
             <div>
             <h4>React</h4>
             <small className='text-light'>Intermediate</small>
             </div>
           </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
           <article className='experience__details'>
             <PiSealCheckFill className='experience__details-icons' />
             <div>
             <h4>Java</h4>
             <small className='text-light'>Experirenced</small>
             </div>
           </article>
           <article className='experience__details'>
             <PiSealCheckFill className='experience__details-icons' />
            <div>
            <h4>SpringBoot</h4>
             <small className='text-light'>Intermediate</small>
            </div>
           </article>
           <article className='experience__details'>
             <PiSealCheckFill  className='experience__details-icons'/>
            <div>
            <h4>Spring(MVC)</h4>
             <small className='text-light'>Intermediate</small>
            </div>
           </article>
           <article className='experience__details'>
             <PiSealCheckFill  className='experience__details-icons'/>
            <div>
            <h4>Node JS  </h4>
             <small className='text-light'>Experirenced</small>
            </div>
           </article>
           <article className='experience__details'>
             <PiSealCheckFill className='experience__details-icons' />
            <div>
            <h4>My SQL</h4>
             <small className='text-light'>Experirenced</small>
            </div>
           </article>   
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
