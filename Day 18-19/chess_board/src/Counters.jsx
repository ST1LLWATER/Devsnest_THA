import React, { useState } from "react";

// class Counters extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increaseCount=this.increaseCount.bind(this);
// }
//     // increaseCount(){
//     //     this.setState({
//     //         this.count+=1;
//     //     })
//     // }

//   }
//   render(){
//       const buttonOne=new Counters();
//     return (
//     <>
//       <p>Each Of The Following Buttons Keep Their Own State's Track!</p>
//       <button onClick={() => buttonOne.setState({ count: this.state.count + 1 })}>{buttonOne.state.count}</button>
//       <button onClick={()=>{this.setState({count: this.state.count+1})}}>{this.state.count}</button>
//       <button onClick={()=>{this.setState({count: this.state.count+1})}}>{this.state.count}</button>
//       <button onClick={()=>{this.setState({count: this.state.count+1})}}>{this.state.count}</button>
//     </>
//   );
//   }
// }

function Counters(){
    const [count,setCount]=useState(0);
    return(
        <>
        <button onClick={()=>setCount(count+1)}>{count}</button>
        </>
    )
}


export default Counters;
