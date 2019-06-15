import React, {Component} from 'react';

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
        let srcPic = this.state.pics;
        return (
            <div>
            <img src={srcPic[2]} width='300' height='300' />
            <img src={srcPic[5]} width='300' height='300' />
            <img src={srcPic[5]} width='300' height='300' />
            </div> 
        )
    }
}

export default Gallery;