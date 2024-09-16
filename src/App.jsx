import Blog from "./components/Blog/Blog";
import "./app.scss";
import AboutMe from "./components/Aboutme/Aboutme";
import Contact from "./components/Contact/Contact";
import GithubStats from "./components/Github Stats/Githubstats";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <GithubStats />
        <Skills />
      </section>
      <Blog />
      <section>
        <Contact />
        <Footer />
      </section>
      {/* <section>
      </section> */}
    </div>
  );
};

export default App;
