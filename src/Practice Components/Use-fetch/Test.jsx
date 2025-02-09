import React from "react";
import useFetch from "./Index";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(error, data, pending);

  return (
    <div className="text-center py-10 font-mono space-y-2">
      <h1 className="mb-5 font-bold text-4xl">Use Fetch Hook</h1>

      {pending ? <h2>Pending ! Please wait</h2> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
