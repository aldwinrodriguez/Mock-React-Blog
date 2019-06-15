import React, {Component} from 'react';
import GalleryPic from './GalleryPic';

class Gallery extends Component {
    constructor(){
        super();
        this.state = {
            pics : []
        }
    }

    componentDidMount(){
        fetch('https://picsum.photos/v2/list?limit=20')
            .then(res => {
                return res.json();
            })
            .then(data => {
                let newData = data.map( picData =>
                    {
                        return picData.download_url + '?grayscale';
                    })
                this.setState({
                    pics: newData
                })
            })
    }
    
    render(){
        let GalleryPicComponents = this.state.pics.map( element => {
            return (
                <GalleryPic pics={element}  key={element}/>
            )
        })
        return (
            <div>
                <h1 style={{paddingTop: '50px', textAlign: 'center'}}>
                    Try hovering on a pic
                </h1>
                <div id='gallery'>
                    {GalleryPicComponents}
                </div> 
            </div>
        )
    }
}

export default Gallery;