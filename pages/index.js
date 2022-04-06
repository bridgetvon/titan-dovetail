import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Photos from '../components/Photos'
import Video from '../components/Video'

export default function Home() {
  return (
    <div>
      <Header />
      <Photos />
      <Video />
    </div>
  )
}
