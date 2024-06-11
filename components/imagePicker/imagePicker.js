'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css'
import Image from 'next/image';


const ImagePicker = ({label,name}) => {
    const imageRef = useRef();
    const [imagePick,setImage] = useState(null);

    const HandleClickPick =()=>{
        imageRef.current.click();
        console.log(imageRef)
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if(!file){
            setImage(null)
            return;
        }
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
        <div className={classes.preview}>
            {!imagePick && <p>No Image Picked Yet </p>}
            {imagePick && <Image src={imagePick} alt='image-by-user' fill />}
        </div>
            <input onChange={handleImageChange} ref={imageRef} type="file" id={name} className={classes.input}  accept='image/png, image/jpeg' name={name} />

            <button onClick={HandleClickPick} className={classes.button} type='button'>Browse Image</button>
        </div>

    </div>
  )
}

export default ImagePicker
