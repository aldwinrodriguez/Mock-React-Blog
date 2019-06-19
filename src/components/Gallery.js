import React, {Component} from 'react';
import GalleryPic from './GalleryPic';

class Gallery extends Component {
    render(){
        const { hearts, addHearts} = this.props;
        let GalleryPicComponents = this.props.pics.map( (element, i) => {
            return (
                <GalleryPic pics={element} addHearts={addHearts} key={i}/>
            )
        })
        return (
            <div>
                <div style={{paddingTop: '50px', textAlign: 'center'}}>
                    <h1 >
                        Try hovering on a pic
                    </h1>
                    <h5 style={{color: 'gray'}}>
                        Count of likes : {hearts}
                    </h5>
                </div>
                <div id='gallery'>
                    {GalleryPicComponents}
                </div> 
            </div>
        )
    }
}

export default Gallery;