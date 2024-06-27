import { Layer } from "../Layer/layer"
import "./drink.css"

export const Drink = ({id, name, ordered, image, layers }) => (
    
    <div className="drink">
        <div className="drink__product">
            <div className="drink__cup">
                <img src={image} />
            </div>
            <div className="drink__info">
                <h3>{name}</h3>
                {layers.map((layer, index) => <Layer key={index} color={layer.color} label={layer.label} />)}
            </div>
        </div>
        <form data-id={id} action="submit" className="drink__controls">
            <input type="hidden" className="order-id" value={ordered}/>
            {ordered ? <button type="submit" className="order-btn order-btn--ordered">Zrušit</button> : <button type="submit" className="order-btn">Objednat</button>}
        </form>
    </div>
)