import Image from 'next/image'
import styles from './page.module.css'
import { Map } from './components/map'

export default function Home() {
  return (
    <main>
      <Map />
    </main>
  )
}
