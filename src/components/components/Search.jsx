import { useState } from "react";
import { Search as SearchIcon } from "lucide-react"; 

export default function Search({ onSearch, placeholder = "Search..." }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-md float-right">
      <div className="relative flex-1">
        <SearchIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md 
                     focus:ring-2 focus:ring-gray-500 focus:border-gray-500 
                     placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-gray-800 text-white font-medium 
                   rounded-r-md hover:bg-gray-700 transition"
      >
        Search
      </button>
    </form>
  );
}
