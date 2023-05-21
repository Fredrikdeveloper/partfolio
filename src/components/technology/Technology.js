import React from 'react'
import "./Technology.css"
const Technology = () => {
    return (
        <div className='technology-body'>
            <h3 className='text-center text-light mt-5'>My Tech Stack</h3>
            <h5 className='text-center text-light my-5'>Technologies I’ve been working with recently</h5>
            <div className='technology-cards'>
                <div className='technology-card'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png' alt='' />
                </div>
                <div className='technology-card'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' alt='' />
                </div>
                <div className='technology-card'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVkjvrKlCFO5RaTpfIkV2bvQFEZd9vMOUpg&usqp=CAU' alt='' />
                </div>
                <div className='technology-card'>
                    <img src='data:image/png;base64,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' alt='' />
                </div>
                <div className='technology-card'>
                    <img src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" alt='' />
                </div>
            </div>
        </div>
    )
}

export default Technology