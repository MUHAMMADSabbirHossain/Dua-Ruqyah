import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCategory = () => {
    const axiosPublic = useAxiosPublic();
    const { data: category } = useQuery({
        queryKey: ['category'],
        queryFn: async function () {
            try {
                // Fetch categories from the API or any other source
                const response = await axiosPublic.get(`/categories`);
                // console.log(response.data);

                return response.data;
            } catch (error) {
                console.error('Error fetching categories:', error.massage);
            }
        }
    });

    return { category };
};

export default useCategory;