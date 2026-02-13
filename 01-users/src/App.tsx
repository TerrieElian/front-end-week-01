import './App.css'
// import { CommonAction } from './components/common/commonAction.tsx'
import { FeatureCardMain } from './components/features/card/featureCardMain.tsx'
import { FeatureCardHeader } from './components/features/card/featureCardHeader.tsx'
import { FeatureTableHeader } from './components/features/table/featureTableHeader.tsx'
import { FeatureTableRow } from './components/features/table/featureTableRow.tsx'

function App() {
  return (
    <>
      <FeatureCardMain
        children={
          <>
            <FeatureCardHeader />
            <FeatureTableHeader />
            <FeatureTableRow />
          </>
        }
      />
    </>
  )
}

export default App
