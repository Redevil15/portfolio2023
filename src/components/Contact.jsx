import React,{useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {SectionWrapper} from '../hoc'
import { EarthCanvas } from './canvas'
import {slideIn} from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setloading] = useState(false)

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-column-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get In touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label
            className='flex flex-col'
          >
            <span className='text-whute font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              /* onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'What's your name'" */
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary p-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            >
            </input>
          </label>

          <label
            className='flex flex-col'
          >
            <span className='text-whute font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              /* onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'What's your name'" */
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary p-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            >
            </input>
          </label>

          <label
            className='flex flex-col'
          >
            <span className='text-whute font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              /* onFocus="this.placeholder = ''"
              onBlur="this.placeholder = 'What's your name'" */
              onChange={handleChange}
              placeholder="What do you whant to say"
              className='bg-tertiary p-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            >
            </textarea>
          </label>
          <button
            type='submit'
            className='bg-tertiary p-3 px-8 text-white w-fit text-bold shadow-md shadow-primary outlined-none font-medium rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")