//для рандом индексов айтемов
export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

//для формирования урла
export const buildUrl = (url, params) => {
	let urlWithParams = url;
	Object.entries(params).forEach(([key, value], i) => {
		const sign = !i ? '?' : '&';
		urlWithParams += `${sign}${key}=${value}`;
	});
	return urlWithParams;
};
