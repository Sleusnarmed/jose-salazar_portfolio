import Hero from '@/components/hero/Hero.jsx'
import Projects from '@/components/projects/Projects'
import Example from '../../components/examples/Example'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.hola}>
      <Hero></Hero>
      <Projects></Projects>
      <Example></Example>
    </div>
  )
}

export default Home
