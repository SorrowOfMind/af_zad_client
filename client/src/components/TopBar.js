import React from 'react';

const TopBar = () => {
  return (
    <header className="header">
      <nav className="navbar bg-dark navbar-dark ">
          <div className="container">
              <a className="navbar-brand" href="#">
                  ads<span className="header__title-colored-red">fox</span><span className="header__title-colored-teal">__TASK</span>
              </a>
          </div>
      </nav>
    </header>
  );
}

export default TopBar;
