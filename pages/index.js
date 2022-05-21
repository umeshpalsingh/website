import Head from 'next/head';
import Image from 'next/image';
import Loader from 'react-loaders';
import Hero from '../components/Hero/Hero';

export default function Home() {

  return (
    <div>
      <Hero />
      <Loader type="pacman" />
    </div>
  );
}
