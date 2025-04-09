import axiosInstance from './axiosInstance'
import axios from 'axios'
import constants from '@assets/constants.json'

const handleError = (error: Error | unknown) => {
  if (axios.isAxiosError(error)) {
    throw { message: error.message, response: error.response }
  } else {
    throw { message: constants.unexpectedError }
  }
}

// GET requests
export const getData = async (url: string) => {
  const params = {
    'api-key': import.meta.env.VITE_API_KEY,
  }

  try {
    const response = await axiosInstance.get(url, { params })
    return response.data
  } catch (error: Error | unknown) {
    return handleError(error)
  }
}
