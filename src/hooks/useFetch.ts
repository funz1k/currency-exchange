import { useEffect, useState } from "react";

type ICurrency = {
	[key: string]: number;
}

// type IRequest = {
// 	method: string;
// 	headers: any;
// }

const useFetch = (url: string) => {

	const [status, setStatus] = useState('idle');
	const [rates, setRates] = useState<ICurrency>({});



	useEffect(() => {
		if (!url) return;

		// const myHeaders = new Headers();
		// myHeaders.append("apikey", "xDTj6r4wU4wNaXRxXZOA0lDkHXODK6w2");

		// const requestOptions: IRequest = {
		// 	method: 'GET',
		// 	headers: myHeaders
		// };

		const fetchData = async () => {
			setStatus('fetching');
			const response = await fetch(url);
			const data = await response.json();
			const result = {
				UAH: 1,
				USD: data[0].buy,
				EUR: data[1].buy
			}
			setRates(result);
			setStatus('fetched');
		};

		fetchData();
	}, [url]);

	return { status, rates };
};

export default useFetch