import { useState } from 'react';
import data from '../assets/data.json';
import InfoComponent from './common/InfoComponent';
export const MainBlock = () => {
    const [formData, setFormData] = useState({
        studyArea: '',
        hobbies: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]:
                type === 'checkbox'
                    ? checked
                        ? [...prevData[name], value]
                        : prevData[name].filter((item) => item !== value)
                    : value
        }));
    };
    const handleSubmit = () => {};
    return (
        <main className="container mx-auto">
            <section>
                <h1 className="text-[56px] text-[#262626] leading-[64px] my-[60px]">
                    CHOOSE A COURSE
                </h1>
            </section>
            <section className="bg-white w-full  p-8 md:pb-[200px]">
                <h2 className="text-[44px] leading-[52px] my-[50px] text-[#262626] font-medium ">
                    WHAT STUDY AREA AND LEVEL ARE YOU INTERESTED IN?
                </h2>
                <form className="max-w-md " onSubmit={handleSubmit}>
                    <div>
                        <label className="flex flex-row text-[#2b2b2b] font-semibold items-center text-lg leading-2xl mb-2">
                            StudyArea
                            <InfoComponent text="Choose your study Area" />
                        </label>
                        <select
                            id="studyArea"
                            name="studyArea"
                            value={formData.studyArea}
                            onChange={handleChange}
                            className="w-full text-xs box-border rounded-none h-12 px-[15px] max-w-[400px] border-[1px] border-[#ccc]  shadow-sm focus-visible:outline-0">
                            <option value="" className="text-xs">
                                Select a Study Area
                            </option>
                            {data?.studyArea.map((study) => (
                                <option key={study.value} value={study.value} className="text-xs">
                                    {study.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                        <div>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                            />
                            <label htmlFor="male" className="ml-2 mr-4">
                                Male
                            </label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                            />
                            <label htmlFor="female" className="ml-2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Hobbies
                        </label>
                        <div>
                            <input
                                type="checkbox"
                                id="reading"
                                name="hobbies"
                                value="reading"
                                checked={formData.hobbies.includes('reading')}
                                onChange={handleChange}
                            />
                            <label htmlFor="reading" className="ml-2 mr-4">
                                Reading
                            </label>
                            <input
                                type="checkbox"
                                id="sports"
                                name="hobbies"
                                value="sports"
                                checked={formData.hobbies.includes('sports')}
                                onChange={handleChange}
                            />
                            <label htmlFor="sports" className="ml-2 mr-4">
                                Sports
                            </label>
                            <input
                                type="checkbox"
                                id="cooking"
                                name="hobbies"
                                value="cooking"
                                checked={formData.hobbies.includes('cooking')}
                                onChange={handleChange}
                            />
                            <label htmlFor="cooking" className="ml-2">
                                Cooking
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </form>
            </section>
            <section className=""></section>
        </main>
    );
};
