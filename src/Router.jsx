import React from 'react';

class DefaultRoute extends React.Component {
  render() {
    const { component: Component, content, status } = this.props;

    let Comp;

    console.log('Component', Comp);

    if (!Component) {
      Comp = <div>loading</div>;
    } else {
      Comp = <Component key="defaultRouteComponent" {...content} status={status} dispatch={this.props.dispatch} />;
    }

    return Comp;
  }
}

export default DefaultRoute;
