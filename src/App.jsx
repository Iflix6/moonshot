import  Navbar from './components/Navbar';
import  Hero from './components/Hero';
import  Trading from './components/Trading';
import  Feature from './components/Feature';
import  Feedback from './components/Feedback';
import  Newsletter from './components/Newsletter';
import  Earnings from './components/Earnings';
import  Footer from './components/Footer';

const App =() => {
  
  return (
    
      <div className='bg-primary overflow-hidden xl:max-w-[1280px] w-full'>
              <div className='px-6 sm:px-16 flex justify-center items-center'>
                
                    <Navbar />
                
              </div>
              <div className='flex justify-center items-start'>
              
                <Hero />
              
            </div>
            <div className='sm:px-16 px-6 flex justify-center items-start'>
              <div className='xl:max-w-[1280px] w-full'>

            <Trading />
            <Feature />
            <Feedback />
            <Newsletter />
            <Earnings />
            <Footer />
              </div>
            </div>
      </div>  
  )
}

export default App;
