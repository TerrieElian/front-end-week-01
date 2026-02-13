import { CommonAction } from '../../common/commonAction'

export const FeatureCardHeader = () => {
  return (
    <>
      <div className="width-full flex h-12 w-full items-center justify-between rounded-t-xl">
        <div className="text-start">
          <h1 className="text-xl font-semibold text-gray-700">Users</h1>
          <p className="text-sm text-gray-500">Manage your users</p>
        </div>
        <CommonAction />
      </div>
    </>
  )
}
