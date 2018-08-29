//ref:https://getbootstrap.com/docs/4.1/components/pagination/
import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {setSelectedPageNumber} from './actions';
function Pagination(props){
  let listData= getList(props);
  console.log(listData,props)
return(
<nav aria-label="Page navigation example" onClick={(evt)=>{
 
  console.log(evt.target.name);// gives the name of the anchor target
 props.setSelectedPageNumber(evt.target.name);
}}>{listData}
</nav>

)
}

function getList(options){
  const {totalPages,selectedPage} = options;
   let ulList=[];
   if(totalPages){
    let liList=[];
    let previousClassName = "page-item";
    let nextClassName ="page-item";
    let itemclassName = "page-item";
    if(selectedPage == "1"){
      previousClassName += " disabled"
    }
    if(selectedPage == totalPages){
     nextClassName += " disabled"; 
    }
    liList.push(<li key="previous" className={previousClassName}>
      <a className="page-link" name="previous" tabIndex="-1">Previous</a>
    </li>
    );
   
    for(let i=1; i<=totalPages;i++){
       itemclassName = (selectedPage == i  ? "page-item active" : "page-item");


      liList.push( <li key={i} className={itemclassName}><a className="page-link" name={i}>{i}</a></li>)
    }
    liList.push( <li key="next" className={nextClassName}>
      <a className="page-link" name="next">Next</a>
    </li>
    );
   ulList.push( <ul key="paginationUL" className="pagination justify-content-center">{liList}</ul>)
   }
return ulList;
}




Pagination.propTypes = {
  totalPages:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]),
selectedPage:PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]),
};
Pagination.defaultProps={
}

const mapStateToProps = (state) => ({
  selectedPage:state.getIn(["pagination","selectedPage"]),
  totalPages:state.getIn(["pagination","totalPages"]),

});

const mapDispatchToProps = (dispatch) => bindActionCreators({setSelectedPageNumber}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);



