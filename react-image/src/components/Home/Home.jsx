import React,{useState} from 'react'
import "./home.scss";
import { motion } from "framer-motion"

import axios from 'axios';

const Home = () => {

  const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])
    const clientId = process.env.REACT_APP_ACCESS_KEY 
    const handleChangePhoto = async  ()=>{
          try{
            const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=${clientId}`)
            console.log(res)
            setResult(res.data.results) 
          }catch(err){
            console.log(err)
          }
    }
 
  return (
    <>
        <div className='container text-center my-5'>
        <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
          >
                <input type="text" 
                    className='form-control' value={photo} 
                    onChange={(e) => {setPhoto(e.target.value)}} 
                    placeholder="Search image.."/>
                <button type='submit' onClick={handleChangePhoto} className='btn btn-primary my-2'>Get Photo</button>
            </motion.div>
            </div>

            <div className="container">
              <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
                <div className="row text-center text-lg-start">
                    {result.map((value) => {
                      return (
                        <div className="col-lg-3 col-md-4 col-6">
                                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                      })}
                </div>
              </motion.div>

            </div>

    </>
  )
}

export default Home