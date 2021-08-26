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
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
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
          </section>
        </div>
      </main>
    </div>
    </>
  );
}

export default Home;