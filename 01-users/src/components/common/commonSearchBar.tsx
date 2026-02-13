import { useState } from 'react'
import { Search } from 'lucide-react'

type SearchBarProps = {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSearch = () => {
    onSearch(query)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search-bar flex items-center">
      <div className="relative">
        <Search
          className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
          size={16}
        />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search..."
          className="rounded bg-gray-200 p-2 pr-4 pl-10 focus:outline-none"
        />
      </div>
    </div>
  )
}

export default SearchBar
