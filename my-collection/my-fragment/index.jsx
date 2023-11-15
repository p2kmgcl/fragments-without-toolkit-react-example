import React from "react";
import { Counter } from "./Counter";

export default function MyFragment(props) {
  console.log('MyFragment props', props);
  return <Counter />;
}
