import './overview.css'


function Overview() {
    return (
        <>
            <div className="parent-box">
                <div className="container">

                    <div className="container-child-1 text-center md:text-start md:mt-5">
                        <div className='flex justify-center md:justify-start'>
                            <p className="sub-child-1 w-40 px-5 text-center">Why Join Us?</p>
                        </div>
                        <p className="sub-child-2">Great Leaders deserve the best guidance</p>
                        <p className="sub-child-3">Writo Education Makes it Happen...</p>
                    </div>

                    <div className="container-child-2 flex justify-center">
                        <div className="hexagon-box-1">
                            <div className="poster-box-1">
                                <div className="box-img">
                                <p className="box-img-num">3000+</p>
                                    <p className="box-img-text">
                                        Students enroll in the program
                                    </p>
                                </div>
                                <div className="box-img">
                                <p className="box-img-num">500+</p>
                                    <p className="box-img-text">
                                        Guided and mentor all participants
                                    </p>
                                </div>
                            </div>
                            <div className="poster-box-1 box-relative">
                                <div className="box-img">
                                <p className="box-img-num">200+</p>
                                    <p className="box-img-text">
                                        Students built soft skills and initiate the ideas
                                    </p>
                                </div>
                                <div className="box-img">
                                <p className="box-img-num">10+</p>
                                    <p className="box-img-text">Successful Entrepreneurs build startups</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Overview;