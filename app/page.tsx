import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Navbar></Navbar>
      <Hero></Hero>
      <LogoTicker></LogoTicker>
    </>
  );
}
