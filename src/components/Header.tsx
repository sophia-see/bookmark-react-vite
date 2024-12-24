interface HeaderProps {
    setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header ({setIsMenuOpened}: HeaderProps) {

    const handleMenuClick = () => {
        setIsMenuOpened((isMenuOpened) => !isMenuOpened);
    }

    return (
        <header>
            <nav className="nav__container">
                <img src="images/logo-bookmark.svg" alt="logo of bookmark" />
                <img src="images/icon-hamburger.svg" alt="menu icon" className="nav__menu_btn" onClick={handleMenuClick}/>
            </nav>
        </header>
    )
}