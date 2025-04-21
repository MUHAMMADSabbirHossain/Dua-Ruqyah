import React from 'react';
import Navbar from './Navbar.jsx';
import dua from '../../assets/dua-logo.svg';
import supportImg from '../../assets/support.svg';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import useCategory from '../../hooks/useCategory.jsx';
import useSubCategory from '../../hooks/useSubCategory.jsx';
import useGetDuasBySubCategoryId from '../../hooks/useGetDuasBySubCategoryId.jsx';
import duaArrow from '../../assets/duaarrow.svg';

const LeftBar = () => {
    /* const { category } = useCategory();
    const { subCategory } = useSubCategory(); */

    // const { duaBySubCategoryId } = useGetDuasBySubCategoryId(subCategory?.data.map(subcat => subcat.subcat_id));

    // console.log(category);
    // console.log(subCategory);
    // console.log(subCategory?.data.map(subcat => subcat.subcat_id));
    // console.log("from leftbar", duaBySubCategoryId);


    return (

        <>
            <section className='bg-white p-5 rounded-2xl shadow min-w-20'>
                <img src={dua} alt="Dua logo" className='w-10 h-10 mb-20' />
                <Navbar tailwindProps="flex flex-col" />
                <NavLink to='/support'>
                    <img src={supportImg} alt="Support logo" className='w-10 h-10 mt-20' />
                </NavLink>
            </section>

            {/* <section className='mx-5 w-80 hidden lg:block text-lg max-h-[calc(70vh)] overflow-y-scroll rounded-2xl'>
                <h2 className='font-bold my-3 text-2xl font-mono'>Dua Page</h2>
                <h3 className='bg-[#1FA45B] text-center text-white font-semibold rounded-t-2xl py-3'>Categories</h3>

                <div className='bg-white rounded-b-lg p-2s shadow-md'>
                    <div className='flex items-center mx-2 my-3 p-3 text-gray-600 border-2 font-semibold border-gray-400 rounded-lg'>
                        <FaSearch className='text-gray-600' />
                        <input type="text" name="searchCategories" id="" placeholder='Search by Categories' className='mx-1 outline-none' />
                    </div>
                    <div className=''>
                        <ul>
                            {
                                category?.data.map((category) =>
                                    <li key={category.id}
                                        className='p-1 m-1 flex flex-col'>
                                        <div className='p-1 flex justify-between items-center hover:bg-gray-200 hover:rounded-lg hover:cursor-pointer transition-all duration-300'>
                                            <div className='flex items-center'>
                                                <img src={`../../assets/category_icons/${category.cat_icon}.svg`} alt="" className='w-10 h-10 m-2' />
                                                <div>
                                                    <p className='text-green-500 font-bold'>{category.cat_name_en}</p>
                                                    <p className='text-gray-600 font-semibold'>Subcategory: {category?.no_of_subcat} </p>
                                                </div>
                                            </div>

                                            <div className='flex flex-col text-gray-700 font-semibold'>
                                                <span className='text-center'>{category?.no_of_dua}</span>
                                                <span>Duas</span>
                                            </div>
                                        </div>
                                        <ul className=''>
                                            {
                                                subCategory?.data.filter((subCategory) =>
                                                    subCategory.cat_id === category.id
                                                ).map((subcat) =>
                                                    <li key={subcat.id}
                                                        className=''>
                                                        <h3 className='font-semibold text-gray-600 my-2'>{subcat.subcat_name_en}</h3>

                                                        <ul className=''>
                                                            {
                                                                duaBySubCategoryId.filter((dua) => (dua.subcat_id === subcat.subcat_id)).map((duas, index) => <li key={index}
                                                                    className='p-2 flex items-center hover:bg-gray-200  hover:rounded-lg hover:cursor-pointer transition-all duration-300'>
                                                                    <img src={duaArrow} alt="Dua Arrow" className='w-7 h-7' />
                                                                    {duas.dua_name_en}
                                                                </li>)
                                                            }
                                                        </ul>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </section > */}
        </>
    );
};

export default LeftBar;