import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import { Button } from "@mantine/core"
import { NextPageWithLayout } from "@/types/types"
import AppLayout from "@/components/Layout"

const inter = Inter({ subsets: ["latin"] })

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Button>asd</Button>
    </>
  )
}

Home.Layout = AppLayout
export default Home;
