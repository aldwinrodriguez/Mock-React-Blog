import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function GalleryPic(props) {
    const [likeStatus, setLikeStatus] = useState(false);

    function changeColor(e){
        if (!likeStatus) {
            e.target.nextElementSibling.firstElementChild.style.color = 'red';
            props.addHearts();
            setLikeStatus(true);
        }
    }

    return(
        <div className='imgGalleryContainer'>
            <img src={props.pics} onDoubleClick={changeColor} alt='' width='300' height='300' />
            <div>
                <FontAwesomeIcon icon={faHeart} />
                <span>This is an example caption, you can double click the img to like</span>
            </div>
        </div>
    )
}

export default GalleryPic;