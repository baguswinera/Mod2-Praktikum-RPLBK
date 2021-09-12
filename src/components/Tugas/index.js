import React, { Component } from "react";
export default class Tugas extends Component {
render() {
return (
<div
className="flex flex-col items-center justify-center bggray-
50 shadow-md"
style={{ height: "400px" }}
>
<h1 className="font-bold textx1">{
this.props.tugas}</h1>
<p>{this.props.asprak}</p>
</div>
);
}
}