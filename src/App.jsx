import './index.css';
import {  Intro, About, Projects, Navbar, Experience, Education } from './components';

const App = () => (
  <div className='bg-primary h-auto w-full overflow-hidden text-white flex flex-col items-center justify-center gap-[100px] md:gap-[70px] select-none'>
      <Navbar />
      <Intro />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Education />
    </div>
)


export default App