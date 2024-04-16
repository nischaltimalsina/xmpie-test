import React from 'react';
import data from '../../assets/data.json';

const Step2 = ({ activeCourse, courses, setCourses, field, setError, error }) => {
    return (
        <section>
            <h2 className="text-[33px] leading-[43px] mt-[50px]  font-bold ">
                What courses are you interested in?
            </h2>
            <p className=" mt-4">
                Choose courses from the options below and we’ll add them to your personalised
                brochure.
            </p>
            <p className=" font-normal mt-4">
                We&apos;ll also include information on these topics, and more:
            </p>
            <ul className="list-disc ml-8">
                {data.topics.map((topic) => (
                    <li key={topic} className="leading-[24px] text-[20px] font-normal mt-4">
                        {topic}
                    </li>
                ))}
            </ul>
            <h2 className="text-[33px] leading-[43px] mt-[50px]  font-bold ">{field}</h2>

            {activeCourse?.vocational &&
                (activeCourse?.vocational.length === 0 ? (
                    `There are currently no Vocational and Further Education Courses(International) relating to ${field}.`
                ) : (
                    <div className="my-4">
                        <label className="flex flex-row leading-[33px] text-[25px] font-bold items-center text-lg leading-2xl mb-2">
                            Vocational and further education
                        </label>
                        <div>
                            {activeCourse?.vocational?.map((course) => (
                                <div key={course} className="w-full flex items-center">
                                    <input
                                        type="checkbox"
                                        id={course}
                                        name="courses"
                                        value={course}
                                        checked={courses.includes(course)}
                                        className="w-[20px] h-[20px] mr-6 my-2 rounded-[5px]"
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
                    `There are currently no Bachelor Courses(International) relating to ${field}.`
                ) : (
                    <div className="my-4">
                        <label className="flex flex-row leading-[33px] text-[25px] font-bold items-center text-lg leading-2xl mb-2">
                            Bachelor Courses
                        </label>

                        <div>
                            {activeCourse?.bachelor?.map((course) => (
                                <div key={course} className="w-full flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-[20px] h-[20px] mr-6 my-2 rounded-[5px]"
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
                    `There are currently no Masters Courses(International) relating to  ${field}.`
                ) : (
                    <div className="my-4">
                        <label className="flex flex-row leading-[33px] text-[25px] font-bold items-center text-lg leading-2xl mb-2">
                            Masters, graduate courses and PhDs (postgraduate)
                        </label>

                        <div>
                            {activeCourse?.masters?.map((course) => (
                                <div key={course} className="w-full flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-[20px] h-[20px] mr-6 my-2 rounded-[5px]"
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
