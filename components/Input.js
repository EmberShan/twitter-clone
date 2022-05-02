import { useState, useRef, useEffect } from "react"
import {
    CalendarIcon,
    ChartBarIcon,
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
  } from "@heroicons/react/outline";

//  window not defined issue 
import dynamic from "next/dynamic";
const EmojiPicker = dynamic(() => import('./EmojiPicker')); 


function Input() {
  const [input, setInput] = useState(""); 
  const [selectedFile, setSelectedFile] = useState(null); 
  const filePickerRef = useRef(null); 
  const [showEmojis, setShowEmojis] = useState(false); 

  const addImageToPost = () => {}; 


  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };



  return (
    <div className={`border-b border-gray-700 p-3 flex 
    space-x-3 overflow-y-scroll`}>
        <img src="https://rb.gy/ogau5a" 
        alt=""
        className='h-7 w-7 rounded-full cursor-pointer'/>

        <div className="w-full divide-y divide-gray-700">
            <div className={``}>
                <textarea value={input} name="" id="" rows="2"
                placeholder="type somethings..."
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent outline-none text-[#d9d9d9
                text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                />

                {selectedFile && (

                    <div className="relative">
                        <div className="absolute w-8 h-8 bg-[#15181c] 
                        hover:bg-[#272c26] bg-opacity-75 rounded-full 
                        flex items-center justify-center top-1 left-1
                        cursor-pointer"
                        onClick={() => setSelectedFile(null)}>
                            <XIcon className="text-white h-5" />
                        </div>

                        <img src={selectedFile} alt="" className="
                            rounded-2xl max-h-80 object-contain 
                        "/>
                    </div>

                )}

            </div>
            
            {/* icons under the text area */}
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex items-center">
                    <div className="icon cursor-pointer" 
                    onClick={() => filePickerRef.current.click()}>
                        <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                        <input type="file" 
                        hidden
                        onChange={addImageToPost} 
                        ref={filePickerRef}
                        />
                    </div>

                    <div className="icon rotate-90">
                        <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>

                    <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                        <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>

                    <div className="icon">
                        <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                    </div>

                    {/* type of window needs to be added; next.js has problems with ssr */}
                    {showEmojis && 
                        (<EmojiPicker 
                            theme="dark"
                            onSelect={addEmoji}
                        />)
                    }
                    
                </div>
            </div>


        </div>


    </div>

  )
}

export default Input