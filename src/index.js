import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props){
  return (
    <div>
      <div>{props.title1}</div>
      <div>{props.text}</div>
      <div>{props.author}</div>
      <div>{props.author}</div>
    </div>
  )
}

const name = {
  name : "dkdlelw",
  text : "hello",
  author : {
    name: "aa",
    url : "naver.com"
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello title1={name.name} text ={name.text} author={name.author.name} url={name.author.url}/>);