import "./header.css"

export const Header = ({showMenu}) => {
    return (
        <>
            {
                showMenu ? (
                    <header>
                        <div className="header__content container">
                            <div className="site-logo"></div>
                            <div className="navigation">
                                <button className="nav-btn"></button>
                                <nav className="rollout-nav nav-closed">
                                <a href="/index.html">domů</a>
                                <a href="/order.html">menu</a>
                                <a href="#gallery">galerie</a>
                                <a href="#contact">kontakt</a>
                                </nav>
                            </div>
                        </div>
                    </header>
                ) : (
                    <header>
                        <div className="header__content container">
                            <div className="site-logo"></div>
                            <div className="navigation">
                                <button className="nav-btn"></button>
                                <nav className="rollout-nav nav-closed">
                                <a href="/index.html">domů</a>
                                </nav>
                            </div>
                        </div>
                    </header>
                )
            }
        </>
    )
}
