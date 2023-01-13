import Title2 from "../main-page-components/Title2";
import Accordions from "../main-page-components/Accordions";
import MainData from "../data/MainData";

function Knowledge({ knowledgeData }) {
  return (
    <div className="knowledge">
      <Title2 title2={'Knowledge about cherry blossom by country and region'}></Title2>
      <Accordions accordionsData={knowledgeData['accordionsData']}></Accordions>
    </div>
  )

}

export default Knowledge;