import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function GalleryPic(props) {
    return(
        <div className='imgGalleryContainer'>
            <img src={props.pics} alt='' width='300' height='300' />
            <div>
                <FontAwesomeIcon icon={faHeart} />
                <span>This is an example caption, you can click the heart to like</span>
            </div>
        </div>
    )
}

export default GalleryPic;