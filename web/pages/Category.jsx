import React, { useRef } from 'react';
import Dua from '../components/Dua';
import useGetAllDua from '../hooks/useGetAllDua';
import CategorySearchBar from '../components/CategorySearchBar';
import useCategory from '../hooks/useCategory';
import useSubCategory from '../hooks/useSubCategory';
import useGetDuasBySubCategoryId from '../hooks/useGetDuasBySubCategoryId';

const Category = () => {
    const { getAllDua } = useGetAllDua();
    const { category } = useCategory();
    const { subCategory } = useSubCategory();
    const { duaBySubCategoryId } = useGetDuasBySubCategoryId(subCategory?.data.map(subcat => subcat.subcat_id))
    // console.log(getAllDua);

    const duaRef = useRef(null);

    function handleScrollToDua(id) {
        console.log(id);

        const duaElement = document.getElementById(id);
        if (duaElement) {
            duaElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    }

    return (
        <section className='flex'>
            <CategorySearchBar category={category} subCategory={subCategory} handleScrollToDua={handleScrollToDua} duaBySubCategoryId={duaBySubCategoryId} />

            <section className='h-[80%] overflow-y-scroll'>
                {
                    getAllDua?.data.map((dua, index) => <Dua key={index} dua={dua} duaRef={duaRef} />)
                }
            </section>
        </section>
    );
};

export default Category;