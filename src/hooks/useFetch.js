import useSWR from "swr";

function useFetch(url) {
  const fetcher = (apiUrl) => fetch(apiUrl).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useFetch;
