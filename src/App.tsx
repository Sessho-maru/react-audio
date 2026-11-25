import { BrowserRouter, Route, Routes } from 'react-router'
import { css } from '../styled-system/css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className={css({ maxWidth: '960px', mx: 'auto', p: '8' })}>
              <h1 className={css({ fontSize: '3xl', fontWeight: 'bold' })}>
                React Audio
              </h1>
              <p className={css({ mt: '3', color: 'gray.600' })}>
                remake for React_Audio
              </p>
            </main>
          }
        />
        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
