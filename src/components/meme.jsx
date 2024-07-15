import React from "react";


export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  })
  const [allMemeImage, setAllMemes] = React.useState([])

  React.useEffect(() => {

    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
        setAllMemes(data.data.memes)
    }
    getMemes()
  },[])

  
 

  
  function getMemeImage() {
    
     const randomNumber  = Math.floor(Math.random() *allMemeImage.length)
     const url = allMemeImage[randomNumber].url
     setMeme(prevMeme => ({...prevMeme, randomImage: url}))


     console.log(formData)


  }
 
  

  function handleChanges(event) {
    const {name, value} = event.target
    setMeme(prevformData => ({...prevformData, [name]: value}))
  }
  return (
    <main>
        
      <div className="form">
            <input 
            type="text"
             placeholder="shutup"
              className="form--input" 
              name="topText"
              onChange={handleChanges}
              value={meme.topText}
              />
          
            <input
              type="text"
              placeholder="and take my money"
              className="form--input"
              name="bottomText"
              onChange={handleChanges}
              value={meme.bottomText}
            />
        
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
     
    </main>
  );
}
