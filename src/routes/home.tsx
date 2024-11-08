import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export const Route = createFileRoute('/home')({
  component: () => (
    <div className="font-sans">
      <Hero />
      <Footer />
    </div>
  ),
})
