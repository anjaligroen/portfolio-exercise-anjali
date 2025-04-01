import { useState } from "react";
import "./App.css";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";

export const App = () => {
  console.log("The portfolio Items:");
  console.log(portfolioItems); // Check console to see how portfolioItems look like. You can delete this after.
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);
  // State to keep track of the selected portfolio Item
  return (
    <div className="App">
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
};
