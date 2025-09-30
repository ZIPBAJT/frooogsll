import Head from 'next/head'
import Image from 'next/image'
import { TelegramPost } from '../components/TelegramPost'

export default function Home() {
  // JS-часть

  return (
    // JSX-часть
    <>
      {/* элементы добавлять после этой строки */}
      <TelegramPost src="https://t.me/mathhobby/684" />
      

      
    </>
  )
}
