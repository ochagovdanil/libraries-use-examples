import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
});

const fetcher = (url: string) =>
	axiosInstance.get(url).then(response => response.data);

export default fetcher;
