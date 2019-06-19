import React, {Component} from 'react';
import GalleryPic from './GalleryPic';

class Gallery extends Component {
    constructor(props){
        super(props);
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
        const { hearts, addHearts} = this.props;
        console.log('thiss', this.props)
        let GalleryPicComponents = this.state.pics.map( element => {
            return (
                <GalleryPic pics={element} addHearts={addHearts} key={element}/>
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