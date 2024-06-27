import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { Order } from '../components/Order/order';


const response = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image")
const json = await response.json()
const order = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      <Order items={order} />
      <Footer />
    </div>
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
