import axiosInstance from './axiosInstance';
import axios from 'axios';
import constants from '@assets/constants.json';
import { Article } from '@src/pages/articleList/ArticleList';
import { API_KEY } from '@assets/envVariables';

interface GetDataType {
  results: Article[];
}

const handleError = (error: Error | unknown): void => {
  if (axios.isAxiosError(error)) {
    throw { message: error.message, response: error.response };
  } else {
    throw { message: constants.unexpectedError };
  }
};

// GET requests
export const getData = async (url: string): Promise<GetDataType | void> => {
  const params = {
    'api-key': API_KEY,
  };

  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error: Error | unknown) {
    return handleError(error);
  }
};
