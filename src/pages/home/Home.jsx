import Hero from '@/components/hero/Hero.jsx'
import ToolsSection from '@/components/toolsSection/ToolsSection.jsx'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.hola}>
      <Hero></Hero>
      <ToolsSection></ToolsSection>
     
    </div>
  )
}

export default Home
