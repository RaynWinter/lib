
import ListItem from './ListItem.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import '../App.css';

function Home(props) {
  return (
    <>
    <div classNameName="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
          <h3>SDI Library Page</h3>
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
      </header>
      <main className="mdl-layout__content">
        <div className="mdl-layout__tab-panel is-active" id="overview">
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <h4 className="mdl-cell mdl-cell--12-col">Book List</h4>
                <ListItem props={props}/>
              </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn2">
              <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn2">
              <li className="mdl-menu__item" disabled>Authors</li>
              <li className="mdl-menu__item">Michelle</li>
              <li className="mdl-menu__item">Oleg</li>
            </ul>
          </section>
        <section className="section--footer mdl-color--white mdl-grid">
        <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Lorem ipsum dolor sit amet</h5>
              Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
            <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Lorem ipsum dolor sit amet</h5>
              Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}

export default Home;
