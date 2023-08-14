import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicPages } from './routes'
import { Fragment } from 'react'
import DefaultLayout from './components/layout/DefaultLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicPages.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
