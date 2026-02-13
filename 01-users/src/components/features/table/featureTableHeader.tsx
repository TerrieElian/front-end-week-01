import SearchBar from '../../common/commonSearchBar'
import { EllipsisVertical } from 'lucide-react'

export const FeatureTableHeader = () => {
  const handleSearch = (query: string) => {
    // Handle the search logic here
    console.log('Searching for:', query)
  }
  return (
    <>
      <div className="flex items-center justify-start space-x-4">
        <input
          className="h-7 w-9 appearance-none rounded-lg border-2 border-gray-300 checked:border-blue-500 checked:bg-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          type="checkbox"
        />
        <SearchBar onSearch={handleSearch} />
        <div className="ml-4 flex w-full justify-between">
          <p>Rating</p>
          <p>Role</p>
          <p>Newsletter</p>
          <p>Last Login</p>
          <EllipsisVertical className="ml-2" />
        </div>
      </div>
    </>
  )
}
