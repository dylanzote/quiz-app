import { useEffect, useState } from 'react'
import { ClickStyleLogo } from '../../config/icons'
import PageCenter from '../ui/PageCenter'

const SplashScreen = () => {
  const [logoSize, setLogoSize] = useState(0.25)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLogoSize(0.75)
      } else {
        setLogoSize(1)
      }
    }

    // Set initial logo size
    handleResize()

    // Update logo size on window resize
    window.addEventListener('resize', handleResize)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <PageCenter justifyCenter>
      <div className="logo-container transition-all duration-1000" style={{ scale: logoSize }}>
        <img 
          src={ClickStyleLogo} 
          alt="Click Style Profile" 
          className="max-w-[300px] md:max-w-[400px] h-auto"
        />
      </div>
    </PageCenter>
  )
}

export default SplashScreen
