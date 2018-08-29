//ref:https://getbootstrap.com/docs/4.0/components/list-group/

/*
href is same as id in nav-tabcontent children*/
import React from 'react';
import PropTypes from 'prop-types';
require("./List.css")
function List(props){
  return (<div className="just-padding">

<div className="list-group list-group-root well">
  
  <a href="#item-1" className="list-group-item" data-toggle="collapse">
    <i className="glyphicon glyphicon-chevron-right"></i>Item 1
  </a>
  <div className="list-group collapse" id="item-1">
    
    <a href="#item-1-1" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 1.1
    </a>
    <div className="list-group collapse" id="item-1-1">
      <a href="#" className="list-group-item">Item 1.1.1</a>
      <a href="#" className="list-group-item">Item 1.1.2</a>
      <a href="#" className="list-group-item">Item 1.1.3</a>
    </div>
    
    <a href="#item-1-2" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 1.2
    </a>
    <div className="list-group collapse" id="item-1-2">
      <a href="#" className="list-group-item">Item 1.2.1</a>
      <a href="#" className="list-group-item">Item 1.2.2</a>
      <a href="#" className="list-group-item">Item 1.2.3</a>
    </div>
    
    <a href="#item-1-3" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 1.3
    </a>
    <div className="list-group collapse" id="item-1-3">
      <a href="#" className="list-group-item">Item 1.3.1</a>
      <a href="#" className="list-group-item">Item 1.3.2</a>
      <a href="#" className="list-group-item">Item 1.3.3</a>
    </div>
    
  </div>
  
  <a href="#item-2" className="list-group-item" data-toggle="collapse">
    <i className="glyphicon glyphicon-chevron-right"></i>Item 2
  </a>
  <div className="list-group collapse" id="item-2">
    
    <a href="#item-2-1" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 2.1
    </a>
    <div className="list-group collapse" id="item-2-1">
      <a href="#" className="list-group-item">Item 2.1.1</a>
      <a href="#" className="list-group-item">Item 2.1.2</a>
      <a href="#" className="list-group-item">Item 2.1.3</a>
    </div>
    
    <a href="#item-2-2" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 2.2
    </a>
    <div className="list-group collapse" id="item-2-2">
      <a href="#" className="list-group-item">Item 2.2.1</a>
      <a href="#" className="list-group-item">Item 2.2.2</a>
      <a href="#" className="list-group-item">Item 2.2.3</a>
    </div>
    
    <a href="#item-2-3" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 2.3
    </a>
    <div className="list-group collapse" id="item-2-3">
      <a href="#" className="list-group-item">Item 2.3.1</a>
      <a href="#" className="list-group-item">Item 2.3.2</a>
      <a href="#" className="list-group-item">Item 2.3.3</a>
    </div>
    
  </div>
  
  
  <a href="#item-3" className="list-group-item" data-toggle="collapse">
    <i className="glyphicon glyphicon-chevron-right"></i>Item 3
  </a>
  <div className="list-group collapse" id="item-3">
    
    <a href="#item-3-1" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 3.1
    </a>
    <div className="list-group collapse" id="item-3-1">
      <a href="#" className="list-group-item">Item 3.1.1</a>
      <a href="#" className="list-group-item">Item 3.1.2</a>
      <a href="#" className="list-group-item">Item 3.1.3</a>
    </div>
    
    <a href="#item-3-2" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 3.2
    </a>
    <div className="list-group collapse" id="item-3-2">
      <a href="#" className="list-group-item">Item 3.2.1</a>
      <a href="#" className="list-group-item">Item 3.2.2</a>
      <a href="#" className="list-group-item">Item 3.2.3</a>
    </div>
    
    <a href="#item-3-3" className="list-group-item" data-toggle="collapse">
      <i className="glyphicon glyphicon-chevron-right"></i>Item 3.3
    </a>
    <div className="list-group collapse" id="item-3-3">
      <a href="#" className="list-group-item">Item 3.3.1</a>
      <a href="#" className="list-group-item">Item 3.3.2</a>
      <a href="#" className="list-group-item">Item 3.3.3</a>
    </div>
    
  </div>
  
</div>
  
</div>)
}
function onClickOfList(evt){
  console.log(evt.target.id)// get the id.
}

List.propTypes = {
};

export default List;


