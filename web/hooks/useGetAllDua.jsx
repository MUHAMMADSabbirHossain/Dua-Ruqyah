import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetAllDua = () => {
    const axiosPublic = useAxiosPublic();

    const { data: getAllDua } = useQuery({
        queryKey: ['getAllDua'],
        queryFn: async function () {
            try {
                // Fetch categories from the API or any other source
                const response = await axiosPublic.get(`/all_dua`);
                // console.log(response.data);

                return response.data;
            } catch (error) {
                console.error('Error fetching dua:', error);
                throw new Error('Failed to fetch dua data');
            }
        },
    });

    return { getAllDua };
};

export default useGetAllDua;