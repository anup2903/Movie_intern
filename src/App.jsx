import { useState } from 'react'
import './App.css'
import Land from './components/Land'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Form from './components/Form';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Summary from './components/Summary';
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Land />} />
          <Route path="form" element={<Form />} />
          <Route path="sum" element={<Summary />} />
        </Route>
      </Routes>
    </Router>
    </QueryClientProvider>
  );
}

export default App
