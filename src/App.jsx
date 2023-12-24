
import { useEffect, useState } from 'react';
import './App.css'
import axios from "axios"

import {Button, Container, Form} from "react-bootstrap"
import LoadingSpinner from './LoadingSpinner';
import {VITE_GCLOUD_AUTH_TOKEN, VITE_GOOGLE_PROJECT_ID} from "./constants"

function App() {

  useEffect(() => {
    console.log(VITE_GCLOUD_AUTH_TOKEN, VITE_GOOGLE_PROJECT_ID)
  }, [])

  const [preview, setPreview] = useState("")
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState("")

  const generateImages = async ()=>{

   

    if(prompt === "") return
    try {
      const res = await axios.post(`https://us-central1-aiplatform.googleapis.com/v1/projects/${VITE_GOOGLE_PROJECT_ID}/locations/us-central1/publishers/google/models/imagegeneration:predict`, 
      
        {
          instances: [
            {
              prompt: prompt
            }
          ],
          parameters: {
            sampleCount: 1
          }
        },

        {
          headers:{
            Authorization:`Bearer ${VITE_GCLOUD_AUTH_TOKEN}`
          }
        }
      )

      let base64String = res.data.predictions[0].bytesBase64Encoded

      const imageData = base64String;

      setPreview(`data:image/png;base64,${imageData}`)

      setLoading(false)

      console.log("Image is processing...please wait!!!")

    }
    catch(err){
      console.log(err)
    }
  }





  return (
    <Container className='container'>

    <header>
        <h1>Imagen2 API Demonstration</h1>
    </header>
    <Form>

      <Form.Label>Enter your prompt</Form.Label>
      <Form.Control className='mb-4' onChange={(e)=>{
        setPrompt(e.target.value)
      }}/>

      <div className='sub-container'>
          <Button onClick={(e) => {
            e.preventDefault()
            setLoading(true)
            generateImages()
          }} >Generate Image</Button>

          {loading && <LoadingSpinner />}
          {preview.length > 0 && !loading && <img src={preview} style={{
            width: "400px",
          }} />}
      </div>

      
      </Form>
    </Container>
  )
}

export default App
