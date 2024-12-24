interface MenuDrawerProps {
    setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
    "FEATURES",
    "PRICING",
    "CONTACT"
]

export default function MenuDrawer ({setIsMenuOpened}: MenuDrawerProps) {
    
    const handleMenuClick = () => {
        setIsMenuOpened((isMenuOpened) => !isMenuOpened);
    }

    const renderMenuLinks = links.map((link, index) => {
        const isFirstLink = index == 0;
        const customStyles = `${isFirstLink ? "border-top" : ""}`
        
        return (
            <div className={`${customStyles} border-bottom menu__link border-white`} >
                {link}
            </div>
        )
    })
    
    return (
        <div className="menu__drawer">
            <div className="menu__header">
                <img src="images/logo-bookmark-white.svg" alt="logo of bookmark" />
                <img src="images/icon-close.svg" alt="close icon" onClick={handleMenuClick}/>
            </div>
            <div className="menu__list">
                {renderMenuLinks}
            </div>
            <button className="btn login-btn">LOGIN</button>
        </div>
    )
}