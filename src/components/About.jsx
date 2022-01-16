import React, { useContext } from 'react'

const content = [
    {
        text: "Hello visitor! Welcome...",
        img: "https://picsum.photos/id/269/700/800",
        type:"img-first"
    },
    {
        text: "This web page shows motivational quotes.",
        img: "https://picsum.photos/id/278/700/800",
        type:"img-last"
    },
    {
        text: "You can have a shoot a glance at this.",
        img: "https://picsum.photos/id/223/700/800",
        type:"img-first"
    },
    {
        text: "I hope you can find a piece of yourself.",
        img: "https://picsum.photos/id/279/700/800",
        type:"img-last"
    }
]

function About() {
    return (
        <div>
            {
                content.map((item,index) =>
                    <div className="row d-flex align-items-center" id={index}>
                        
                        <div className={`col-lg-12 d-flex d-xl-block justify-content-center col-xl-6 ${item.type ==="img-last" &&'order-xl-2'} `}>
                            <img src={item.img} alt="..." className='img-fluid'/>
                            </div>
                    
                        <div className="col-lg-12 col-xl-6">
                        <div className=" mx-xl-5 display-6 fw-light my-4">
                            {item.text}
                            <a href={`${index === 3 ? '#0' : `#${index + 1}`}   `} className={`${index === 3 && 'invisible'}`} >        
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                            </a>
                            <a href={`${index === 3 && '#0' } `} className={`${index === 3 ? 'visible': 'invisible' }`} >        
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                            </svg>
                            
                            </a>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default About
