import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from  '../components/Gallery/gallery';
import { Contact } from  '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';

const  fetchGet = async () => {
  const response = await fetch("http://localhost:4000/api/drinks")
  const json = await response.json()
  return json.data
}

const drinks = await fetchGet()


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

/* Zadání - První část - 3 - 3.2 a 
*/
const rolloutNav = document.querySelector(".rollout-nav")

document.querySelector(".nav-btn").addEventListener("click", () => {
  rolloutNav.classList.toggle("nav-closed")
})

rolloutNav.addEventListener("click", () => {
  rolloutNav.classList.add("nav-closed")
})


/* Zadání - Druhá část - 7 - 7.4, 7.5, 7.6., 7.7 
*/
const orderForms = document.querySelectorAll("form")

orderForms.forEach(order => {
  order.addEventListener("submit", async (event) => {
      const idDrink = event.target.dataset.id
      
      if(drinks[idDrink].ordered) {
        await fetch(`http://localhost:4000/api/drinks/${idDrink}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify([{ op: 'replace', path: '/ordered', value: false}])
        })
        window.location.reload()
      } else {
        await fetch(`http://localhost:4000/api/drinks/${idDrink}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify([{ op: 'replace', path: '/ordered', value: true}])
        })
        window.location.reload()
      }
  })
})

