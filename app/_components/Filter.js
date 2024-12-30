"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  //   console.log(searchParams)

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);

    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border-primary-800 flex">
      <Button handleFilter={handleFilter} filter="all">All</Button>
      <Button handleFilter={handleFilter} filter="small">1&mdash;3 guests</Button>
      <Button handleFilter={handleFilter} filter="medium">4&mdash;7 guests</Button>
      <Button handleFilter={handleFilter} filter="large">8&mdash;12 guests</Button>
    </div>
  );
}


function Button({filter, handleFilter, activeFilter, children}){
    return (
      <button
        onClick={() => handleFilter(filter)}
        className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50":""}`}
      >
      {children}  
      </button>

    )
}