import '../css/cards.css'

const cardTitles = ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5', 'Cat6']
const goToAntherPage = {
  0: 'home',
  1: 'about',
  3: 'about',
  5: 'home',
}

function Cards({ setPage }) {
  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }

  return (
    <main>
      <div className="cards">
        {cardTitles.map((title, index) => {
          return <div className='card' key={title}>
            <h2 className="card__title">{title}</h2>
            <img className="card__pic" src="http://placekitten.com/100/100" alt="A cute cat" />
            <div className="card__text" key={title}>Quisque quis justo lacus. Phasellus condimentum est vitae orci
              aliquam, vel {
                goToAntherPage[index] !== undefined && <a href="" onClick={e => go(e, goToAntherPage[index])}>go to {goToAntherPage[index]}</a>
              } ante porttitor.
            </div>
          </div>
        })}
      </div>
    </main>
  );
}

export default Cards;