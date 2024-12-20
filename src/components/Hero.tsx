export default function Hero () {
    return (
        <section className="hero__container">
            <div className="hero__img_container">
                <img className="full-img" src="images/illustration-hero.svg" alt="tablet with bookmark list" />
                <div className="img-shadow-right"></div>
            </div>
            <div className="content">
                <div className="heading-1">A Simple Bookmark Manager</div>
                <div className="subheading mt-16 mb-32">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</div>
                <div className="btn-containers">
                    <button className="btn primary-btn">Get it on Chrome</button>
                    <button className="btn secondary-btn">Get it on Firefox</button>
                </div>
            </div>
        </section>
    )
}