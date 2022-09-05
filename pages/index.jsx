import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HotCollections from '../components/HotCollections'
import Marketplace from '../components/Marketplace'
import MarketplaceBid from '../components/MarketplaceBid'
import Mint from '../components/Mint'
import Navbar from '../components/Navbar'
import TopSellers from '../components/TopSellers'
import TrendingAuctions from '../components/TrendingAuctions'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>NFTs Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <Navbar/>
      <Banner/>
      <TrendingAuctions/>
      <TopSellers/>
      <Marketplace/>
      <MarketplaceBid/>
      <HotCollections/>
      <Mint/>
      <Footer/>
      </>
      <footer>
       
      </footer>
    </div>
  )
}
