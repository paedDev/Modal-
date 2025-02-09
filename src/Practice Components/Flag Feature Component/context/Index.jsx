import React, { createContext, useEffect, useState } from "react";
import featureFlagsData from "../data";
export const FeatureFlagContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [isLoading, setIsLoadng] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setIsLoadng(true);
      const res = await featureFlagsData();
      console.log(res);
      setEnabledFlags(res);
      setIsLoadng(false);
    } catch (error) {
      console.log(error);
      setIsLoadng(false);
      throw new Error(error);
    }
  }
  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <>
      <FeatureFlagContext.Provider value={{ isLoading, enabledFlags }}>
        {children}
      </FeatureFlagContext.Provider>
    </>
  );
};

export default FeatureFlagGlobalState;
