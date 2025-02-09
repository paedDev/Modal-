import React, { useContext } from "react";
import { FeatureFlagContext } from "./context";
import Accordion from "../Accordion/Accordion";
import TTT from "../TicTacToe/TTT";
import ModalParent from "../Modal/ModalParent";
import Index from "../Github Finder/Index";

const FeatureFlags = () => {
  const { isLoading, enabledFlags } = useContext(FeatureFlagContext);

  const componentToRender = [
    {
      key: "showTicTacToeGame",
      component: <TTT />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showModalPopUp",
      component: <ModalParent />,
    },
    {
      key: "showGithubProfileFinder",
      component: <Index />,
    },
  ];
  if (isLoading) return <h1>Loading data! Please wait</h1>;
  const checkEnabledFlags = (getCurrentKey) => {
    return enabledFlags[getCurrentKey];
  };
  return (
    <div>
      <h1 className="text-center text-4xl py-10">Feature Flags</h1>
      {componentToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
