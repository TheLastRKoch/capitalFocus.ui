import Header from '../components/layout/Header'
import Meta from '../components/layout/Meta'


const Budget = () => {
  // page content   
  const pageTitle = "Budget"
  const pageDescription = "Where manage the dynamic budget"

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
      <h2>Hello Word</h2>
    </div>
  )
}

export default Budget;
