
const Hero = () => {
    return (
        <div className=" hero">
            <div className="container d-flex justify-content-between nav">
                <div className="logo">        
                    </div>
                <div className=" nav-button">
                    <button className="me-3" >English</button>
                    <button className="bg-danger">Sign In</button>
                </div>
            </div>
            <div className="text-white container fw-bold banner-title">
                <div className="text-center">
                <div>
                    <h1>Unlimited movies, TV shows and more</h1>
                </div>
                <h3 className="fw-normal">Watch anywhere. cancel anytime.</h3>
                <h5 className="fw-light">Ready to watch? Enter your email to create or restart your membership.</h5>
                <div className="banner-button">
                    <input className="me-2" type="text" placeholder="Email Address" />
                    <div className="get"><button>Get Started</button></div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Hero;