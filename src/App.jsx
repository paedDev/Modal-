import React from "react";
import ModalParent from "./Practice Components/Modal/ModalParent";
import Accordion from "./Practice Components/Accordion/Accordion";
import TTT from "./Practice Components/TicTacToe/TTT";
import Index from "./Practice Components/Github Finder/Index";
import FeatureFlagGlobalState from "./Practice Components/Flag Feature Component/context";
import FeatureFlags from "./Practice Components/Flag Feature Component/Index";

const App = () => {
  return (
    <div>
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
};

export default App;
