import React, { useEffect, useState } from 'react'
import '../Style/Link.css'
// import { Button, notification, Divider, Space } from 'antd';
import toast, { Toaster } from 'react-hot-toast';
import Statistik from '../images/icon-brand-recognition.svg'
import Footer from './Footer';
import axios from 'axios'

const Link = () => {
    const [text,setText] = useState('')
    const [data,setData] = useState([])
    const [muncul,setMuncul] = useState(false)


    const handleSubmitLink = (e) => {
        e.preventDefault();
        axios.get(`https://api.shrtco.de/v2/shorten?url=${text}`,{
            url: text
        })
        // console.log(e.target.value)
        .then((res) => {
            // console.log('BERHASIL!')
            setMuncul(true)
            setData(res.data)
            // console.log(data.result)
            toast.success('Berhasil!')
            setText('')
        })
        .catch(err => console.log(err))
    }


    // useEffect(() => {
    //     handleSubmitLink
        
    // },[handleSubmitLink])
    


    const copy = () => {
        navigator.clipboard.writeText(data.result.full_short_link)
        toast.success('Link berhasil disalin!')
        // console.log('BERHASIL')
    }

  return (
    <div className='link'>
      <Toaster/>
        <div className='section-1'>
            
        <div className='input-link' >
            <input placeholder='Shorten a link here' value={text} type="text" onChange={(e) => {
                setText(e.target.value)
                console.log(text)
            }}/>
            <button onClick={handleSubmitLink}>Shorten it</button>
        </div>


        </div>

            {muncul  ?
        <div className='link-info' >
            <div className='link-info-1'>
                <div>
                <h1 className='link-original'>{data.result?.original_link}</h1>
                </div>
                <div className='line'></div>
                <div className='button-copy d-flex align-items-center'>
                <p>{data.result?.full_short_link}</p>
                <button onClick={copy}>Copy</button>
                </div>
        </div>
        </div>
        : <p>No data</p>
            }

            <div className='statistik'>
                <div className='info-statistik'>
                    <h1>Advanced Statistic</h1>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>

                <div className='brand-statistik'>
                    <div className='position'>
                    <div className='brand-statistik-1'>
                    <img src={Statistik}/>
                </div>
                </div>
                    <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                </div>
                <Footer/>
        </div>
  )
}

export default Link