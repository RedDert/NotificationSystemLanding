import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Demo from '../components/Demo'
import TechStack from '../components/TechStack'
import Installation from '../components/Installation'
import Contributing from '../components/Contributing'
import Footer from '../components/Footer'

export const Route = createFileRoute('/about')({
  component: () => (
    <div className="font-sans">
      <Features />
      <Demo />
      <TechStack />
      <Installation />
      <Contributing />
      <Footer />
    </div>
  ),
})
