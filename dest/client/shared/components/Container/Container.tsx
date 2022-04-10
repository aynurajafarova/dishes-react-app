import { FC, ReactNode } from "react";

import "./Container.scss";

interface IProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

const Container: FC<IProps> = ({ children, className = "" }) => {
  return <div className={`container ${className}`}> {children} </div>;
};

export default Container;
