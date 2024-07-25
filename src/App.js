import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Page from './Page'
import Footer from './Footer'

const Div = styled.div`
  margin: 20px;
`;

function App() {
  return (
    <BrowserRouter>
      <Div>
        <Header />
        <Routes>
        <Route path="/" element={<Page title='Home' body='첫 화면입니다.' />} />
          <Route path="/notice" element={<Page title="Notice" body='공지 화면입니다.' />} />
          <Route path="/about" element={<Page title="About" body='소개 화면입니다.' />} />

        </Routes>
        <Footer />
      </Div>
    </BrowserRouter>
  )
}

export default App
