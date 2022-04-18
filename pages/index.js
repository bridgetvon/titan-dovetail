import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Photos from '../components/Photos'
import Video from '../components/Video'
import About from '../components/About'
import Shop from '../components/Shop'
import Meta from '../components/Meta'
// import { loadStripe } from '@stripe/stipe-js'
// import { Elements } from '@stripe/react-stripe-js'
import { useState } from 'react'

export default function Home() {
const [item, setItem] = useState({
  name: 'timber pergula',
  description: 'lorem aodfadsf',
  image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
  quantity: '0',
  price: '2,000',
});

  return (
    <div>
      <Meta />
      <Header />
      <Photos />
      <Video />
      <Shop />
      <About />
    </div>
  )
}
