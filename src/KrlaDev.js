import React from 'react'

export const KrlaDev = () => {
    return (
        <div className="container-fluid">
            <section className="row">
                <div className="kd-banner">
                    <div></div>
                    <div className="kd-headline"><h1>Karla Navas</h1></div>
                    <div></div>
                </div>
            </section>

            <section className="row mt-4">
                <div className="col-sm-12 kd-quote kd-important-text">
                    "Greatness is a destination, I long for the journey"
                </div>
                <div className="col-sm-12 kd-face">
                    <img src="assets/kd-avatar-face.jpg" alt="Karla Navas"/>
                </div>
            </section>

            <section className="mt-4 kd-section kd-section-about kd-normal-text">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>About Me</h2>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12">
                        <p>My name is <strong>Karla Navas</strong>.</p>
                        <p>I hold a <strong>Bachelor's Degree</strong> in Business Administration, a <strong>Masters</strong> in Leadership, and more recently, a <strong>Diploma in Web Development</strong>.</p>
                        <p>A few years ago I switched careers to become a Web Developer, leaving behind 8 years in Marketing.</p>
                        <p>During my time as a marketer, I run the aromatherapy marketing department for a business in the beauty industry. Later in my career, I worked alongside software engineers creating strategies for digital loyalty programs and promotions.</p>
                        <p>These last few years I have learned the art of Web Development (although this is a lifelong learning career) and used my skills to work with local digital agencies and other bodies developing websites, microsites, and all things web.</p>
                    </div>
                </div>
            </section>

            <section className="mt-4 kd-section kd-section-tech kd-normal-text">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="alt">Tech Skills</h2>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12 kd-card">
                        <p><img className="kd-fade-in-effect" src="assets/kd-front-end.png" alt="Front End Development" /></p>
                        <h3>Modern Front End Development</h3>
                        <p className="kd-fineprint">Javascript (ES6) | ReactJS | Jest | SASS</p>
                    </div>

                    <div className="col-sm-12 kd-card">
                        <p><img className="kd-fade-in-effect" src="assets/api-dev.jpg" alt="API Development" /></p>
                        <h3>API Development</h3>
                        <p className="kd-fineprint">PHP / Laravel</p>
                    </div>

                    <div className="col-sm-12 kd-card">
                        <p><img className="kd-fade-in-effect" src="assets/ui-design.jpg" alt="UI Design" /></p>
                        <h3>UI Design</h3>
                        <p className="kd-fineprint">Photoshop | Illustrator | Canva | Social Media</p>
                    </div>
                </div>
            </section>

            <section className="mt-4 kd-section kd-section-projects kd-normal-text">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Projects</h2>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12 kd-card-alt">
                        <p><img className="kd-icon kd-fade-in-effect" src="assets/icon-maths.png" alt="Kumon Addition Challenger" /></p>
                        <h3>Kumon Addition Challenger</h3>
                        <p className="kd-fineprint">ReactJS | Laravel API Backend</p>
                        <p className="kd-description">My daughter started the maths' Kumon program recently and she had to do additions based on a number. I decided to translate the paper based experience to this app.</p>
                        <p className="kd-cta">
                            <a href="https://github.com/krladev/kmon-ui" target="_blank" rel="noreferrer">Github</a>
                            <a href="https://kmon-ui.karlanavas.com" target="_blank" rel="noreferrer">Demo</a>
                        </p>
                    </div>

                    <div className="col-sm-12 kd-card-alt">
                        <p><img className="kd-icon kd-fade-in-effect" src="assets/icon-dev-journey.png" alt="Dev Journey" /></p>
                        <h3>Dev Journey</h3>
                        <p className="kd-fineprint">ReactJS</p>
                        <p className="kd-description">First personal project to showcase my ReactJS abilities.</p>
                        <p className="kd-cta">
                            <a href="https://github.com/krladev/dev-journey-react" target="_blank" rel="noreferrer">Github</a>
                            <a href="https://krladev.github.io/dev-journey-react" target="_blank" rel="noreferrer">Demo</a>
                        </p>
                    </div>
                </div>
            </section>

            <footer className="row kd-section-footer">
                <div>Design &amp; Development by <a href="mailto:dev@karlanavas.com">Karla Navas</a> &copy; 2021</div>
            </footer>
        </div>
    )
}
