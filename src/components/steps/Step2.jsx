import React from 'react';
import data from '../../assets/data.json';

const Step2 = ({ activeCourse, courses, setCourses, field, setError, error }) => {
    return (
        <section>
            <h2 className="text-[44px] leading-[52px] font-condensed my-[50px] text-[#262626] font-medium ">
                WHAT COURSES ARE YOU INTERESTED IN?
            </h2>
            Choose courses from the options below and we’ll add them to your personalised brochure.
            <br />
            We&apos;ll also include information on these topics, and more:
            <ul className="list-disc ml-8">
                {data.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                ))}
            </ul>
            <h3 className="text-[28px] leading-[36px] uppercase font-condensed my-[25px] text-[#262626] font-medium ">
                {field}
            </h3>
            {activeCourse?.vocational &&
                (activeCourse?.vocational.length === 0 ? (
                    `There are currently no Vocational and Further Education Courses(International) relating to ${field}`
                ) : (
                    <div className="my-4">
                        <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                            Vocational and further education
                        </label>
                        <div>
                            {activeCourse?.vocational?.map((course) => (
                                <div key={course}>
                                    <input
                                        type="checkbox"
                                        id={course}
                                        name="courses"
                                        value={course}
                                        checked={courses.includes(course)}
                                        onChange={(e) => {
                                            error === 'Please chhose at least 1 course'
                                                ? setError('')
                                                : null;
                                            setCourses((prevData) =>
                                                e.target.checked
                                                    ? [...prevData, e.target.value]
                                                    : prevData.filter(
                                                          (item) => item !== e.target.value
                                                      )
                                            );
                                        }}
                                    />
                                    <label htmlFor="reading" className="ml-2 mr-4 leading-[35px]">
                                        {course}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            {activeCourse?.bachelor &&
                (activeCourse?.bachelor.length === 0 ? (
                    `There are currently no Bachelor Courses(International) relating to ${field}`
                ) : (
                    <div className="my-4">
                        <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                            Bachelor Courses
                        </label>
                        <div>
                            {activeCourse?.bachelor?.map((course) => (
                                <div key={course}>
                                    <input
                                        type="checkbox"
                                        id={course}
                                        name="courses"
                                        value={course}
                                        checked={courses.includes(course)}
                                        onChange={(e) => {
                                            error === 'Please chhose at least 1 course'
                                                ? setError('')
                                                : null;
                                            setCourses((prevData) =>
                                                e.target.checked
                                                    ? [...prevData, e.target.value]
                                                    : prevData.filter(
                                                          (item) => item !== e.target.value
                                                      )
                                            );
                                        }}
                                    />
                                    <label htmlFor="reading" className="ml-2 mr-4 leading-[35px]">
                                        {course}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            {activeCourse?.masters &&
                (activeCourse?.masters.length === 0 ? (
                    `There are currently no Masters Courses(International) relating to  ${field}`
                ) : (
                    <div className="my-4">
                        <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                            Masters, graduate courses and PhDs (postgraduate)
                        </label>
                        <div>
                            {activeCourse?.masters?.map((course) => (
                                <div key={course}>
                                    <input
                                        type="checkbox"
                                        id={course}
                                        name="courses"
                                        value={course}
                                        checked={courses.includes(course)}
                                        onChange={(e) => {
                                            error === 'Please chhose at least 1 course'
                                                ? setError('')
                                                : null;
                                            setCourses((prevData) =>
                                                e.target.checked
                                                    ? [...prevData, e.target.value]
                                                    : prevData.filter(
                                                          (item) => item !== e.target.value
                                                      )
                                            );
                                        }}
                                    />
                                    <label htmlFor="reading" className="ml-2 mr-4 leading-[35px]">
                                        {course}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </section>
    );
};

export default Step2;
Step2.propTypes = false;
