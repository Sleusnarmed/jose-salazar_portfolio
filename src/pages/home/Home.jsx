import Hero from '@/components/hero/Hero.jsx'
import ToolsSection from '@/components/toolsSection/ToolsSection.jsx'
import ImageHover from '@/components/imageHover/ImageHover'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.hola}>
      <Hero></Hero>
      <ToolsSection></ToolsSection>
      <ImageHover></ImageHover>
    </div>
  )
}

export default Home
