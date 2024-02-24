import { axiosInstance } from './fetcher';

type CreateProductType = {
	arg: {
		title: string;
	};
};

export const createProduct = async (
	url: string,
	{ arg }: CreateProductType
) => {
	await axiosInstance.post(url, {
		title: arg.title,
	});
};
