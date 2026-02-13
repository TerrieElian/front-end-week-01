import type { ReactNode } from 'react'

export const FeatureCardMain = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-gray flex h-48 flex-col gap-4 rounded-xl bg-gray-100 p-8">
        {children}
      </div>
    </>
  )
}
