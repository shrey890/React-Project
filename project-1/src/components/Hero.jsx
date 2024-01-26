const Hero = () => {
    return (
        <main className="hero-container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <div>
                    <p className="hero-content">
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.
                    </p>
                </div>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="sec-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img className="eCom" src="/public/img/flipkart.svg" alt="flipkart" />
                        <img className="eCom" src="/public/img/amazon.svg" alt="amazon" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/public/img/shoe_image.svg" alt="" />
            </div>
        </main>
    );
};
export default Hero;
