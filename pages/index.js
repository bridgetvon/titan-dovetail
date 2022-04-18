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

export default function Home() {


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
