/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './common/components/layout';
import { navLink } from './common/constant/navLinks';

const App = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    {navLink.map((item) => (
                        <Route key={item.id} path={item.path} element={item.element} />
                    ))}
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
