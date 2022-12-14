import Head from "next/head";
import Features from "../components/Features";
import Hero from "../components/Hero";
import PricePlan from "../components/PricePlan";
import Rating from "../components/Rating";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chrip.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <Rating />
      <PricePlan />
    </div>
  );
}
