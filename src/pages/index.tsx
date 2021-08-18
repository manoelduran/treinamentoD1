import React from 'react';

import SimpleCount from "../components/SimpleCount";
import Timer from "../components/Timer";
import FastState from "../components/FastState";

function IndexPage() {
  return (
    <div>
      <SimpleCount />
      <Timer />
      <FastState />
    </div>
  );
}

export default IndexPage;
