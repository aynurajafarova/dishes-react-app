import { FC } from "react";

import "./Header.scss";

interface IProps {
  title: string;
}

const Header: FC<IProps> = ({ title }) => {
  return (
    <header className="header center">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
