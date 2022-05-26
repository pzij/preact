/**
 * Custom Version of Preact of pzij
 */

export class Component {
  constructor() {
    this._dirty = this._disableRendering = false;
    this.nextProps = this.base = null;
    this.props = hook(this, "getDefaultProps") || {};
    this.state = hook(this, "getInitialState") || {};
    hook(this, "initialize");
  }
}
