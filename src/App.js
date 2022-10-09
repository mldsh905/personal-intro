import Test from './components/test/test';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skill from "./components/skill/skill";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
    return (
        <div>
            {/*<Test/>*/}
            <Navbar/>
            <Home/>
            <About/>
            <Skill/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
