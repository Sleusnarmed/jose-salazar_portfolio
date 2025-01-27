import Hero from '@/components/hero/Hero.jsx'
import Projects from '@/components/projects/Projects'
import ImageHover from '@/components/imageHover/ImageHover'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.hola}>
      <Hero></Hero>
      <Projects></Projects>
      <ImageHover></ImageHover>
    </div>
  )
}

export default Home
