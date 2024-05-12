"use client"
import { HomePage } from "@/features/HomePage/HomePage";
import Image from "next/image";
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    // Redirect the user to direct.me/mariaspawcare
    setTimeout(() => window.location.href = 'https://direct.me/mariaspawcare', 5000)
  }, []);

  // This component doesn't need to render anything since the redirection happens immediately
 
  return (
    <>
    </>
    // <HomePage/>
  );
}
