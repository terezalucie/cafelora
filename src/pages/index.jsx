import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from  '../components/Gallery/gallery';
import { Contact } from  '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);


const rolloutNav = document.querySelector(".rollout-nav")

document.querySelector(".nav-btn").addEventListener("click", () => {
  rolloutNav.classList.toggle("nav-closed")
})

rolloutNav.addEventListener("click", () => {
  rolloutNav.classList.add("nav-closed")
})