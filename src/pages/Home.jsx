import React from 'react'
import Logo from '../images/logo.svg'
import Banner from '../images/illustration-working.svg'
import '../Style/Home.css'
import Link from './Link';

const Home = () => {
  return (
    <div className='home'>
        <div className='container m-2'>
               <img src={Logo} alt='logo' />
           <div className='top-section'>
               <div className='left-section'>
                    <h1>More than just shorter links
</h1>
<p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
               </div>
               <div className='right-section'>
                    <img src={Banner} alt='banner'/>
               </div>
                
        </div>
        </div>
        <Link/>

    </div>
  )
}

export default Home