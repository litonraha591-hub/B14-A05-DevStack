

import { Suspense, use } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import Technologies from './Components/Technologies'
import { Http2ServerRequest } from 'http2'


const technologyPromise = async()=>{
  const res = await fetch('./Technologies.json');
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
  
<Nav></Nav>
<Banner></Banner>
<Suspense fallback={<h2>Loading.....</h2>}>
  <Technologies technologiesPromise={technologyPromise()}></Technologies>
</Suspense>

    </>
  )
}

export default App
