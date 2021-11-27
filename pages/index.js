import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Shahreyar</title>
        <meta name="description" content="Web developer and AI enthusiast" />
      </Head>
      <Intro/>
      <Services services={services}/>
      <Testimonials/>
      
    </div>
  )
}


export const getStaticProps = () =>{
  const services = data;
  return{
    props: { services },
  };
};

