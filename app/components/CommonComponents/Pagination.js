//ref:https://getbootstrap.com/docs/4.1/components/pagination/
import React from 'react';
import PropTypes from 'prop-types';
function Pagination(props){
  
return(
<nav aria-label="Page navigation example" onClick={(evt)=>{

  console.log(evt.target.name);// gives the name of the anchor target

}}>
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" name="previous" tabIndex="-1">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" name="1">1</a></li>
    <li className="page-item active">
      <a className="page-link" name="2">2 <span className="sr-only">(current)</span></a>
    </li>
    <li className="page-item"><a className="page-link" name="3">3</a></li>
    <li className="page-item">
      <a className="page-link" name="next">Next</a>
    </li>
  </ul>
</nav>

)
}


Pagination.propTypes = {
};

export default Pagination;


