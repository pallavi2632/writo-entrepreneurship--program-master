import React, { useEffect, useRef, useState } from 'react';
import './common.css'
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQS = () => {

        const [toggle1, setToggle1] = useState(false);
        const [toggle2, setToggle2] = useState(false);
        const [toggle3, setToggle3] = useState(false);
        const [toggle4, setToggle4] = useState(false);
        const [toggle5, setToggle5] = useState(false);
        const contentRef1 = useRef(null);
        const contentRef2 = useRef(null);
        const contentRef3 = useRef(null);
        const contentRef4 = useRef(null);
        const contentRef5 = useRef(null);

        useEffect(() => {
                if (contentRef1.current) {
                        contentRef1.current.style.maxHeight = toggle1 ? `${contentRef1.current.scrollHeight}px` : '0';
                }
                if (contentRef2.current) {
                        contentRef2.current.style.maxHeight = toggle2 ? `${contentRef2.current.scrollHeight}px` : '0';
                }
                if (contentRef3.current) {
                        contentRef3.current.style.maxHeight = toggle3 ? `${contentRef3.current.scrollHeight}px` : '0';
                }
                if (contentRef4.current) {
                        contentRef4.current.style.maxHeight = toggle4 ? `${contentRef4.current.scrollHeight}px` : '0';
                }
                if (contentRef5.current) {
                        contentRef5.current.style.maxHeight = toggle5 ? `${contentRef5.current.scrollHeight}px` : '0';
                }
        }, [toggle2, toggle1, toggle3, toggle4, toggle5]);

        const toggleHandle1 = () => {
                setToggle1(!toggle1);
        }
        const toggleHandle2 = () => {
                setToggle2(!toggle2);
        }
        const toggleHandle3 = () => {
                setToggle3(!toggle3);
        }
        const toggleHandle4 = () => {
                setToggle4(!toggle4);
        }
        const toggleHandle5 = () => {
                setToggle5(!toggle5);
        }

        const plus = <>
                <FaPlus></FaPlus></>

        const minus = <>
                <FaMinus></FaMinus></>
        return (
                <div>
                        <div>
                                <h1 className='text-xl md:text-5xl xs:text-2xl  text-blue font-bold flex justify-center mb-6 mt-8'>Frequently Asked <span className='text-pink ml-2 xs:ml-1'>Questions</span></h1>
                        </div>
                        <div className='mx-5 my-7 md:mx-24 xs:mx-3'>
                                <div className='collapseContainer'style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle1}>
                                                Q1. Do I Need a Business Idea to Enroll in the Program?
                                                {toggle1 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle1 ? 'openCollapse' : ''} collapseContent`} ref={contentRef1}>
                                                <article className='article'>
                                                        <div className="hr-line"></div>
                                                        <p>No, you don't necessarily need a fully-formed business idea to enroll in an entrepreneurship program. Many programs cater to individuals at various stages of entrepreneurial exploration, from those with an existing idea to those looking to discover one. Programs often provide guidance for idea generation and validation.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer my-3 md:my-5'style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle2}>
                                                Q2. What is the Duration of the Entrepreneurship Program?
                                                {toggle2 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle2 ? 'openCollapse' : ''} collapseContent`} ref={contentRef2}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>The duration of entrepreneurship programs can vary widely. Some programs are short-term, spanning a few weeks or months, while others can be more extensive, taking up to a year or longer to complete. The duration often depends on the depth of the curriculum and the flexibility of the program.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer' style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle3}>
                                                Q3. What Background or Experience is Required?
                                                {toggle3 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle3 ? 'openCollapse' : ''} collapseContent`} ref={contentRef3}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>Entrepreneurship programs usually welcome participants from diverse backgrounds. You might have a background in business, technology, arts, or any other field. Some programs may require basic business knowledge, while others are designed to accommodate beginners. Relevant work experience can add value, but it's not always a strict requirement.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer my-3 md:my-5' style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle4}>
                                                Q4. What Support is Offered for Starting a Real Business?
                                                {toggle4 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle4 ? 'openCollapse' : ''} collapseContent`} ref={contentRef4}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>Many entrepreneurship programs offer practical support for starting a real business. This can include mentorship, business plan development, access to resources like funding or co-working spaces, and networking opportunities. Some programs even have incubator or accelerator components that provide intensive support to launch businesses.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer' style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle5}>
                                                Q5. Can I Take the Program Online or Part-Time?
                                                {toggle5 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle5 ? 'openCollapse' : ''} collapseContent`} ref={contentRef5}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>Yes, many entrepreneurship programs offer online or part-time options to accommodate different schedules and locations. Online programs often provide flexibility, allowing you to learn at your own pace. Part-time options are great for individuals who are working or have other commitments but still want to pursue entrepreneurship education.</p>
                                                </article>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default FAQS;