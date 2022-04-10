import { FC } from "react";

import "./Loading.scss";

const Loading: FC = () => {
  return (
    <div className="loading center">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loading;
