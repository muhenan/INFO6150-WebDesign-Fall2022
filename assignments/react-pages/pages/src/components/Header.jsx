const menus = ['home', 'cards', 'about'];

function Header({ setPage }) {

  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }

  return (
    <header>
      <h1>React-pages</h1>
      <nav>
        <ul className="globalnav__menu">
          {menus.map(
            item => {
              return (<li key={item}>
                <a href="" onClick={(e) => go(e, item)}>{item}</a>
              </li>)
            }
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header;