import { Drink } from "../Drink/drink"
import "./menu.css"

export const Menu = () => (
    <section id="" className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          <Drink name="Romano" image="http://localhost:4000/assets/cups/romano.png" />
        </div>
        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
)