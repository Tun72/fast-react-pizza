import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchOrder() {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    function onHandelSubmit(e) {
        e.preventDefault();
        if(!query) return;

        navigate(`/order/${query}`);
        setQuery("");
    }
    return (
      <form onSubmit={onHandelSubmit}>
         <input placeholder="Search order #" className="rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 w-28 sm:w-64 transition-none duration-300 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 sm:focus:w-72" value={query} onChange={(e) => setQuery(e.target.value)} />
      </form>
    )
}

export default SearchOrder
