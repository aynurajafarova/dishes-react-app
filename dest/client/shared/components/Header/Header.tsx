import { FC } from "react";

import "./Header.scss";

interface IProps {
  title: string;
  className?: string;
}

const Header: FC<IProps> = ({ title, className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
