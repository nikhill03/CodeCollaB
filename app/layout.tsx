import Footer from './api/components/Footer';
import Navbar from './api/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'CodeCollaB',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer />
      </body> 
    </html>
  )
}
