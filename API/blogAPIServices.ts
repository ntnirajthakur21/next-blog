import { API_BASE_URL } from '@/variables';
import axios, { AxiosResponse } from 'axios';

type ISingleBlog = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const getAllBlogs = async (): Promise<AxiosResponse<ISingleBlog[], any>> =>
    await axios({
        method: 'GET',
        url: `${API_BASE_URL}/posts`,
    });

export const getSingularBlog = async (id: string): Promise<AxiosResponse<ISingleBlog, any>> =>
    await axios({
        method: 'GET',
        url: `${API_BASE_URL}/posts/${id}`,
    });
