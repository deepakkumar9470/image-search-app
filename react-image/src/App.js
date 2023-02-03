import React from 'react';
import './App.scss'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import {Toaster} from 'react-hot-toast'


const App = () => {
	const auth = useSelector((state)=> state.auth)

  return (
	<div>
           <div>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  success : {
                    theme: {
                      primary : '#4aee88',
                    },
                  },
                }}
                />
            </div>
		<BrowserRouter>
             <Navbar/>
			<Routes>

			     <Route index path='/' element={auth._id ? <Home/> : <Navigate to='/login' replace={<Login/>}/>}/>
					
				 <Route path='/login' element={!auth._id ? <Login/> :<Navigate to='/' replace={<Home/>}/> }/>
				 <Route path='/register' element={!auth._id ? <Registration/> : <Navigate to='/' replace={<Home/>}/>}/>

			</Routes>
		</BrowserRouter>
	    
	</div>
  );
}

export default App;
