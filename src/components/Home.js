import React from 'react'

function Home(props) {
    const {claps, hearts} = props;
    return (
        <div id='home'>
            <div className='top'>
                <div>
                    Total hearts = <b>{hearts}</b>
                </div>
                <div>
                    Total claps = <b>{claps}</b>
                </div>
            </div>
            <div className='main'>
                This is a mock for my future blog site
            </div>
        </div>
    )
}
export default Home;