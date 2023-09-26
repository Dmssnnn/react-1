import Links from "../links/links"
import Button from "../button/button"
export default function Section () {
    return (
        <div className="section-wrapper">
            <div className="about-me-section-content">
                    <div className="about-me">
                        <h1>About me</h1>
                        <h6>Photo Of Me</h6>
                        <div className="div-pic">Fake Image</div>
                    </div>
                    <div className="title-heading">
                        <h1>About me</h1>
                        <h6>Photo Of Me</h6>
                        <div className="div-big-pic">Fake Image</div>
                    </div>
            </div>
            <div className="link-section">
                    <div className="button">
                            <h1>Some Links</h1>
                            <span>Lorem ipsum dolor sit ame.</span>
                            <Button />
                            <Links />
                        </div>
                        <div className="title-heading">
                            <h1>TITLE HEADING</h1>
                            <span>Title description, Sep 2, 2020</span>
                            <div className="div-below-big-pic">Fake Image</div>
                        </div>
            </div>
        </div>
    )
}
