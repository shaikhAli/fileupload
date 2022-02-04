import Navigation from './Navigation';
import './Gallery.css';


const Gallery = () => {

    return (
        <div className='gallery-container'>
            <Navigation />
            <h1 style={{textAlign:'center'}}>Gallery</h1>
            <div className='gallery-items'>

                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>
                <div className='gallery-item'>
                    <img src={"https://picsum.photos/400/400"} alt='alt' title='image' />
                </div>

            </div>

        </div>
    )
}


export default Gallery;