	//ref:- https://www.w3schools.com/css/css3_flexbox.asp

import React,{Component} from 'react';
import Pagination from 'components/CommonComponents/Pagination';
import images from 'components/images/CV'
import testCSS from './test.css'
export class Test extends Component { // eslint-disable-line react/prefer-stateless-function


  render(){
  	console.log("there")
   return(
<div key ="Test" id="test" style={{width:"100%",height:"100%"}}>
   <div id="parentDiv" style={{width:"100%",height:"100%"}}>
        <div id="contents" style={{width:"100%",height:"90%", overflow:"hidden"}}>{getBodyContents()}</div>
        <div id="pagination" style={{"position":"fixed","bottom":"0px",left:"43%"}}> <Pagination /></div>
    </div>

</div>
    )


  }
}

function getBodyContents(){
//	let parentDiv = <div><img src={images.testR1} alt="r1"/></div>
//	return parentDiv;
 return (
<div className="flex-container">
  <div><img src={images.testR1} alt="r1"/></div>
  <div><img src={images.testR1} alt="r1"/></div>
  <div><img src={images.testR1} alt="r1"/></div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
  <div>9</div>  
  <div>10</div>
  <div>11</div>
  <div>12</div>  

</div>
)
   
}
export default Test;
