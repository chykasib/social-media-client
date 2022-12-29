import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { router } from './routers/Routers/Routers';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;
