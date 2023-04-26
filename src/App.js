import './App.css';
import { Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsHome from './pages/ProductsHome';
import PageList from './pages/PageList';
import ContentProduct from './components/ContentProduct';
import Filters from './components/Filters';
import Pleasure from './pages/Pleasure';
import ProductItem from './pages/ProductItem';

function App() {
  return (
    <div className="content">
        <Header />
        <Routes>
        
            <Route path='/' element={ <main>    
                <Content />
                <ProductsHome />       
            </main> } />
            <Route path='/ourcoffe' element={
                <main>
                    <ContentProduct />
                    <Filters />
                    <PageList />
                </main>
            }/>
            <Route path='/pleasure' element={
                <main>
                <ContentProduct />
                <Pleasure />
                </main>
            }/>
            <Route path='/product' element={
                <main>
                    <ProductItem />
                </main>
            } />
        
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
