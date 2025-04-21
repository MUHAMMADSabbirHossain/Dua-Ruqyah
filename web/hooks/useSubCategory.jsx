import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSubCategory = () => {
    const axiosPublic = useAxiosPublic();
    const { data: subCategory } = useQuery({
        queryKey: ['subCategory'],
        queryFn: async function () {
            try {
                // Fetch categories from the API or any other source
                const response = await axiosPublic.get(`/sub_categories`);
                // console.log(response.data);

                return response.data;
            } catch (error) {
                console.error('Error fetching sub-categories:', error.massage);
            }
        }
    });

    return { subCategory };
};

export default useSubCategory;