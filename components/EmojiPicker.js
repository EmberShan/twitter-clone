import { useRef, useEffect } from "react"

// emoji mart
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'

export default function EmojiPicker(props) {
  const ref = useRef()

  useEffect(() => {
    if (typeof window !== 'undefined') {
        new Picker({ ...props, data, ref })
    }
  }, [])

  return <div ref={ref} 
            style={{
                position: 'absolute', 
                marginTop: "465px",
                marginLeft: -40,
                maxWidth: "320px",
                borderRadius: "20px",
            }}/>
            
}
