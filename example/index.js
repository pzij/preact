import preact, { Component, hooks, h } from "../src/preact";

const App = () => {
  return <div><div>hello world</div><Clock/></div>;
};

class Clock extends Component {
  state = {
    time: new Date().getTime()
  };
  componentDidMount() {
    setInterval(()=>{
      this.setState({
        time: new Date().getTime()
      })
    }, 1000)
  }
  render(props, state) {
    return <div style={{color: 'red'}}>{state.time}</div>
  }
}

// preact.render(h('div', null, 'Hello Mere'), document.body);
preact.render(<App />, document.body);
