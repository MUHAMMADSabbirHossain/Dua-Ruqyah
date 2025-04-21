import React from 'react';
import duacardImg from '../assets/duacard.svg';
import copyImg from '../assets/copy.svg';
import bookmarkImg from '../assets/bookmark.svg';
import memorizeImg from '../assets/memorize.svg';
import shareImg from '../assets/share.svg';
import reportImg from '../assets/report.svg';


const Dua = ({ dua, duaRef }) => {
    // console.log(dua);

    return (
        <article id={`${dua.id}`} className='bg-white m-6 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300' ref={duaRef}>
            <header className='flex items-center'>
                <img src={duacardImg} alt="Dua card image" />
                <h2 className='font-bold text-green-500 text-lg mx-3'>{dua?.dua_name_en}</h2>
            </header>

            <p className='my-5 font-medium text-md text-gray-700 leading-8'>{dua?.top_en}</p>

            <div>
                <span className='font-bold text-green-500 text-lg'>Reference</span>
                <p className='font-medium text-gray-700'>{dua?.refference_en}</p>
            </div>

            <footer className='flex items-center justify-center space-x-3 sm:justify-end'>
                <div className=" ">
                    <button
                        className="tooltip px-4 py-2 rounded"
                        data-tooltip="Copy"
                    ><img src={copyImg} alt="Copy image" /></button>
                </div>
                <div className=" ">
                    <button
                        className="tooltip px-4 py-2 rounded"
                        data-tooltip="Bookmark"
                    ><img src={bookmarkImg} alt="Bookmark image" title="Bookmark" /></button>
                </div>
                <div className=" ">
                    <button
                        className="tooltip px-4 py-2 rounded"
                        data-tooltip="Memorize"
                    ><img src={memorizeImg} alt="Memorize image" title="Memorize" /></button>
                </div>
                <div className=" ">
                    <button
                        className="tooltip px-4 py-2 rounded"
                        data-tooltip="Share"
                    ><img src={shareImg} alt="Share image" title="Share" /></button>
                </div>
                <div className=" ">
                    <button
                        className="tooltip px-4 py-2 rounded"
                        data-tooltip="Report"
                    ><img src={reportImg} alt="Report image" /></button>
                </div>
            </footer>
        </article>
    );
};

export default Dua;