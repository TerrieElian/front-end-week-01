export const FeatureTableRow = () => {
  return (
    <>
      <tr className="border-t">
        <td>
          <img src="" alt="" />
        </td>
        <td className="px-4 py-2">John Doe</td>
        <td className="px-4 py-2">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
            4.5
          </div>
        </td>
        <td className="px-4 py-2">Admin</td>
        <td className="px-4 py-2">Subscribed</td>
        <td className="px-4 py-2">2024-06-01</td>
      </tr>
    </>
  )
}
