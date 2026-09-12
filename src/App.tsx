

import { Suspense} from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import Technologies from './Components/Technologies'
import type { ITechnologiesProps } from './Type/Type'
import Bottom from './Components/Bottom'




const technologyPromise = async():Promise <ITechnologiesProps[]>=>{
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
  <Technologies technologiesPromise={technologyPromise()} ></Technologies>
</Suspense>
<Bottom></Bottom>

    </>
  )
}

export default App
