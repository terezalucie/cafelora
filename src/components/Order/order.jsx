import "./order.css"
import { OrderItem } from "../OrderItem/orderItem"

export const Order = ({ items }) => {

    return(
        items.length === 0 ? (
            <main className="order">
                <div className="container order__content">
                    <h1>Vaše objedávnka</h1>
                    <p className="empty-order">Zatím nemáte nic objednáno</p>
                </div>
            </main>
        ) : (
            <main className="order">
                <div className="container order__content">
                    <h1>Vaše objedávnka</h1>
                        <div className="order__items">
                            {items.map(item => <OrderItem key={item.id} name={item.name} image={`http://localhost:4000${item.image}`} />)}
                        </div>
                </div>
            </main>
        )
    )
}

