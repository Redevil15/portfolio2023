import React,{useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {SectionWrapper} from '../hoc'
import { EarthCanvas } from './canvas'
import {slideIn} from '../utils/motion'
import { useSnackbar } from 'notistack'

//template_sloxjak
//service_e65k0b6
//4Ffs9gttQERS3Z8YI

const Contact = () => {
  const formRef = useRef();
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true)
    emailjs.send(
      'service_e65k0b6', 
      'template_sloxjak', 
      {
        from_name: form.name,
        to_name: 'Brandon',
        from_email: form.email,
        to_email: 'brandonf2345@gmail.com',
        message: form.message,
      }, 
      '4Ffs9gttQERS3Z8YI')
      .then(() => {
        setloading(false)
        enqueueSnackbar('Thank you, I will get back to you as soon as possible', {variant: 'success'})
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }, (error) => {
        setloading(false)
        console.log(error)
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      })
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse  gap-10 overflow-hidden`}>
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