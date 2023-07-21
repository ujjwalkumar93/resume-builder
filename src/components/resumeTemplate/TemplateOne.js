import React from "react";
import './../../../src/App.css';
import { useSelector } from "react-redux";

export default function TemplateOne() {
    const resumeData = useSelector(state => state.resumeData);
    console.log("resumeData is: ", resumeData)

    return (
        <>
            <div className="resume">
                <header>
                    <h1 className="resume-heading" style={{
                        opacity: resumeData.user.fullName ? 1 : 0.6
                    }}>
                        {`${resumeData.user.fullName ? resumeData.user.fullName : 'John Doe'} `}
                    </h1>
                    <p className="resume-subheading" style={{ opacity: resumeData.user.designation ? 1 : .8 }}>
                        {`${resumeData.user.designation ? resumeData.user.designation : 'Designation'} `}
                    </p>
                </header>

                <section className="section">
                    <h2>Address</h2>
                    <div className="content">
                        <div className="item">
                            <p style={{ opacity: resumeData.user.mobile ? 1 : .5 }}>{resumeData.user.mobile ? resumeData.user.mobile : '956########'}</p>
                            <p style={{ opacity: resumeData.user.email ? 1 : .5 }}>{resumeData.user.email ? resumeData.user.email : 'yourmailid@mail.com'}</p>
                            <p style={{ opacity: resumeData.user.city ? 1 : .5 }}>{resumeData.user.city ? resumeData.user.city : 'city'}</p>
                            <p style={{ opacity: resumeData.user.state ? 1 : .5 }}>{resumeData.user.state ? resumeData.user.state : 'state'}</p>
                            <p style={{ opacity: resumeData.user.pin ? 1 : .5 }}>{resumeData.user.pin ? resumeData.user.pin : 'pin'}</p>
                            <p style={{ opacity: resumeData.user.country ? 1 : .5 }}>{resumeData.user.country ? resumeData.user.country : 'country'}</p>

                        </div>
                    </div>
                </section>

                <section className="section">
                    <h2>Education</h2>
                    <div className="content">
                        <div className="item">
                            <h3>Bachelor of Science in Computer Science</h3>
                            <p>XYZ University</p>
                            <p>Graduated in 2020</p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <h2>Experience</h2>
                    <div className="content">
                        <div className="item">
                            <h3>Front-end Developer</h3>
                            <p>ABC Company</p>
                            <p>2018 - Present</p>
                            <ul>
                                <li>Developed and maintained responsive web applications using HTML, CSS, and JavaScript.</li>
                                <li>Collaborated with designers and backend developers to implement UI features.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <h2>Skills</h2>
                    <div className="content">
                        <ul className="skills-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                </section>
            </div>



        </>
    )
}