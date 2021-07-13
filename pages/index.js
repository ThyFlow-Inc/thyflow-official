import Head from 'next/head'
import Banner from '../components/banner/banner'
import Countdown from '../components/countdown/countdown'
import Features from '../components/features/features'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import HomeHero from '../components/home-hero/home-hero'
import Steps from '../components/steps/steps'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>ThyFlow</title>
        <meta name="description" content="" />
        <link rel="icon" href="/images/thyflowlogo.png" />
      </Head>
      <Header />
      <main className={styles.main}>
        <HomeHero />
        <Features />
        <Steps />
        <Countdown />
        <Banner />
      </main>
      <Footer/>
    </>
  )
}
