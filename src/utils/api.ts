import axios from './axiosConfig';

export const fetchStockData = async (ticker: string) => {
    try {
        const response = await axios.get(`eod/${ticker}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
