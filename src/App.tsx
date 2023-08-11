import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
// import MyPage from './pages/MyPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
