import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Toolbar} from '../components/toolbar'

export default function Home() {
  return(
    <div className = 'page-container'>
     <Toolbar /> 

      <div className = {styles.main}></div>
        <h1>Mine Next.js App</h1>

        <h3> Your one stop shop for the latest news articles</h3>

    </div>
  )
  
}
