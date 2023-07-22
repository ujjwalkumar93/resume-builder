import { memo } from 'react';
import React  from "react";
import './../../../src/App.css';
import { useSelector } from "react-redux";

const TemplateOne = () => {
    const resumeData = useSelector(state => state.resumeData);
    // console.log("resumeData.experianceList: ", resumeData.experianceList)
    return (
            <div className="resume">
                <header>
                    <h1 className="resume-heading" style={{
                        opacity: resumeData.personalInfo.fullName ? 1 : 0.6
                    }}>
                        {`${resumeData.personalInfo.fullName ? resumeData.personalInfo.fullName : 'John Doe'} `}
                    </h1>
                    <p className="resume-subheading" style={{ opacity: resumeData.personalInfo.designation ? 1 : .8 }}>
                        {`${resumeData.personalInfo.designation ? resumeData.personalInfo.designation : 'Designation'} `}
                    </p>
                </header>

                <section className="section">
                    <h2>Address</h2>
                    <div className="content">
                        <div className="item">
                            <p style={{ opacity: resumeData.personalInfo.mobile ? 1 : .5 }}>{resumeData.personalInfo.mobile ? resumeData.personalInfo.mobile : '956########'}</p>
                            <p style={{ opacity: resumeData.personalInfo.email ? 1 : .5 }}>{resumeData.personalInfo.email ? resumeData.personalInfo.email : 'yourmailid@mail.com'}</p>
                            <p style={{ opacity: resumeData.personalInfo.city ? 1 : .5 }}>{resumeData.personalInfo.city ? resumeData.personalInfo.city : 'city'}</p>
                            <p style={{ opacity: resumeData.personalInfo.state ? 1 : .5 }}>{resumeData.personalInfo.state ? resumeData.personalInfo.state : 'state'}</p>
                            <p style={{ opacity: resumeData.personalInfo.pin ? 1 : .5 }}>{resumeData.personalInfo.pin ? resumeData.personalInfo.pin : 'pin'}</p>
                            <p style={{ opacity: resumeData.personalInfo.country ? 1 : .5 }}>{resumeData.personalInfo.country ? resumeData.personalInfo.country : 'country'}</p>

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
                            <h3>{resumeData.currenExperience.jobTitle}</h3>
                            <p>{resumeData.currenExperience.employer}{resumeData.currenExperience.cityAndState ? ', ' : ''}{resumeData.currenExperience.cityAndState}{resumeData.currenExperience.country ? ', ' : ''}{resumeData.currenExperience.country}</p>
                            <p style={{
                                marginTop: '1rem'
                            }}>{`${resumeData.currenExperience.fromDate ? resumeData.currenExperience.fromDate : ''} ${(resumeData.currenExperience.fromDate || resumeData.currenExperience.toDate) ? '-' : ''} ${resumeData.currenExperience.toDate ? resumeData.currenExperience.toDate : ''}`}</p>
                            <p>{resumeData.currenExperience.description}</p>
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
    )
}

export default memo(TemplateOne);
// export default TemplateOne;