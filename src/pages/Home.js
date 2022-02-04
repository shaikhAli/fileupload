import Navigation from './Navigation';
import './Home.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Home = (props) => {

    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState('');

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const upload = () => {
        alert("file needs to be saved!!!");
        navigate("/gallery");
    }

    return (
        <div className='home-container'>
            <Navigation />
            <div className='home-content'>
                <h1>Upload Photo</h1>
                <div>
                    <div className='image-preview' title='preview'>
                        {selectedImage && (
                            <img
                                className='image-preview'
                                src={URL.createObjectURL(selectedImage)}
                                alt="Thumb"
                            />
                        )}
                    </div>
                </div>

                <div className='form-button'>

                    <label className='button upoad-label' htmlFor="upload" >Upload</label>
                    <input
                        className='button'
                        accept="image/*"
                        type="file"
                        onChange={imageChange}
                        name='Upload'
                        id='upload'
                        style={{ visibility: 'hidden' }}
                    />
                    <button onClick={upload} className='button'>Save</button>
                </div>
            </div>

        </div>
    )
}


export default Home;