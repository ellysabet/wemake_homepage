import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
