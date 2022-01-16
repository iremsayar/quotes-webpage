import React from 'react'
import data from '../data'

function Cards() {
    return (
        <div className='container'>
            <div className="row">
                {
                    data.map((item) =>
                        <div className="col-md-6 col-xl-4 d-flex flex-column align-items-center">
                            <div className="rounded-3 shadow-lg my-2 w-75">
                                <div className="row">
                                    <div className="col-md-12">
                                    <img src={item.image} className="img-fluid rounded-circle border border-5 border-muted" alt="" />
                                        </div>
                                    <div className="col-md-12" style={{ height:"15rem" }}>
                                        <p className='fs-4 mt-3 fw-light mx-2'>{item.word}</p>
                                        <p className='fs-5 text-end fst-italic fw-lighter mx-2'>- {item.ceator}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        //     <div className="col-md-4">
                        //     <div className="card" >
                        //         <div className="card-body">
                        //             <blockquote className="blockquote mb-0">
                        //                 <p className="card-text"></p>
                        //                 <footer className="blockquote-footer"><cite title="Source Title"></cite></footer>
                        //             </blockquote>
                        //             </div>
                        //             <img src={item.image} className="card-img-top" alt="" />
                        //         </div>
                        // </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cards
