import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AccountsPage } from './pages/AccountsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AccountsPage />} />
            </Routes>
        </Router>
    );
}

export default App;