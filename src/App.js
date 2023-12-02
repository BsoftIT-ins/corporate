import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



import AppHeader from './component/AppHeader';
import AppHero from './component/AppHero';
import AppAbout from './component/AppAbout';
import AppServices from './component/AppServices';
import AppWorks from './component/AppWorks';
import AppTeams from './component/AppTeams';
import AppTestimonials from './component/AppTestimonials';
import AppPricing from './component/AppPricing';
import AppBlog from './component/AppBlog';
import AppContact from './component/AppContact';
import AppFooter from './component/AppFooter';

function App() {
  return (
 <div className='app'>
  <header id='header'>
  <AppHeader />
  </header>
  <main>
  <AppHero />
  <AppAbout />
  <AppServices />
  <AppWorks /> 
  <AppTeams />
  <AppTestimonials />
  <AppPricing />
  <AppBlog />
  <AppContact />
  </main>
  <footer id='footer'>
  <AppFooter/>
  </footer>
 </div>
  );
}

export default App;
