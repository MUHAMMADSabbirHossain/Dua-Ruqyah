import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetDuasBySubCategoryId = (subCategoryIds) => {
    // console.log(subCategoryIds);
    const axiosPublic = useAxiosPublic();

    const { data: duaBySubCategoryId = [] } = useQuery({
        queryKey: ['duaBySubCategoryId', subCategoryIds],
        queryFn: async function ({ queryKey }) {
            // console.log(queryKey);
            const subCategoryIdArray = queryKey[1];

            const tempResponse = [];
            try {
                // Fetch categories from the API or any other source
                subCategoryIdArray.map(async (subCategoryId) => {
                    const response = await axiosPublic.get(`/all_dua/by_sub_category/${subCategoryId}`);
                    // console.log(res.data);

                    tempResponse.push(...response.data.data);
                });
                // console.log(tempResponse);

                return tempResponse || [];
            } catch (error) {
                console.error('Error fetching duas by sub category id:', error.massage);
            }
        }
    });
    // console.log(duaBySubCategoryId);

    return { duaBySubCategoryId };
};

export default useGetDuasBySubCategoryId;