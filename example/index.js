import preact, { Component, hooks, h } from "../src/preact";

const App = () => {
  return <div><div>hello world</div><Clock/></div>;
};

const Clock = () => {
  return <div style={{color: 'red'}}>{new Date().getUTCDate()}</div>
}

// preact.render(h('div', null, 'Hello Mere'), document.body);
preact.render(<App />, document.body);
