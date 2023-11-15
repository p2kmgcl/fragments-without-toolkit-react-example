import React from "react";
import ReactDOM from 'react-dom';
import { Counter } from "./Counter";

function MyFragment(props) {
  console.log('MyFragment props', props);
  return <Counter />;
}

ReactDOM.unmountComponentAtNode(fragmentElement);
ReactDOM.render(<MyFragment configuration={configuration} />, fragmentElement);
Liferay.once('beforeNavigate', () => ReactDOM.unmountComponentAtNode(fragmentElement));
