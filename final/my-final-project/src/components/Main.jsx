import '../css/main.css'

import Home from './main-pages/Home';
import MainData from './data/MainData';
import Knowledge from './main-pages/Knowledge';
import EventPage from './main-pages/EventPage';
import Join from './main-pages/Join';

function Main({ page }) {
  console.log(MainData['Events']['Yoshino']);
  return (
    <main>
      {page === 'home' && <Home data={MainData['Home']}></Home>}
      {page === 'knowledge' && <Knowledge knowledgeData={MainData['Knowledge']}></Knowledge>}
      {page === 'Yoshino' && <EventPage eventPageData={MainData['Events']['Yoshino']} useCards={true} usePanels={false}></EventPage>}
      {page === 'Tokyo' && <EventPage eventPageData={MainData['Events']['Tokyo']} useCards={false} usePanels={true}></EventPage>}
      {page === 'join' && <Join></Join>}
    </main>
  )
}

export default Main;