import { useState } from "react";

function Reorder({ onReorder }) {
  return (
    <button onClick={onReorder} className="button-reorder"> Reorder</button >
  );
}

export default Reorder;