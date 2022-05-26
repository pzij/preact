import preact, { Component, hooks, h } from "../src/preact";

const App = () => {
  return <Component>hello world</Component>;
};

// preact.render(h('div', null, 'Hello Mere'), document.body);
preact.render(<App />, document.body);
