import { useState, useEffect } from "react";

const useFetch = (apiCallFunction) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		getData();
	}, []);

	const getData = async (...args) => {
		const res = await apiCallFunction(...args);

		if (!res.ok) return setError(true);

		setError(false);
		setData(res.data);
	};

	return { data, error, getData };
};

export default useFetch;
