import Navbar from './Navbar';
import Footer from '../components/Footer';
import Inhalt from './Inhalt';

export default function Impressum() {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className='container mt-32 mx-auto px-12 flex-1'>
        <Inhalt />
        </div>
        <Footer className="mt-auto" />
      </main>
    )
  }