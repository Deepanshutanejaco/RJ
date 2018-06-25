//ref:https://getbootstrap.com/docs/4.0/components/list-group/

/*
href is same as id in nav-tabcontent children*/
import React from 'react';
import PropTypes from 'prop-types';
function List(props){
   if(props.id === "category"){
  return(
<div className="row" key={props.id}>
  <div className="col-4">
    <div className="list-group" id="list-tab" role="tablist" onClick={onClickOfList}>
      <a className="list-group-item list-group-item-action active" id="list1" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
      <a className="list-group-item list-group-item-action" id="list2" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
      <a className="list-group-item list-group-item-action" id="list3" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
      <a className="list-group-item list-group-item-action" id="list4" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">aa</div>
      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">bb</div>
      <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">cc</div>
      <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">ff</div>
    </div>
  </div>
</div>
)  
   }

   else{
    return(
<div className="row" >
  <div className="col-4">
    <div className="list-group" id="list-tab1" role="tablist" onClick={onClickOfList}>
      <a className="list-group-item list-group-item-action active" id="list11" data-toggle="list" href="#list-home1" role="tab" aria-controls="home">Home</a>
      <a className="list-group-item list-group-item-action" id="list21" data-toggle="list" href="#list-profile1" role="tab" aria-controls="profile">Profile</a>
      <a className="list-group-item list-group-item-action" id="list31" data-toggle="list" href="#list-messages1" role="tab" aria-controls="messages">Messages</a>
      <a className="list-group-item list-group-item-action" id="list41" data-toggle="list" href="#list-settings1" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-home1" role="tabpanel" aria-labelledby="list-home-list">aa</div>
      <div className="tab-pane fade" id="list-profile1" role="tabpanel" aria-labelledby="list-profile-list">bb</div>
      <div className="tab-pane fade" id="list-messages1" role="tabpanel" aria-labelledby="list-messages-list">cc</div>
      <div className="tab-pane fade" id="list-settings1" role="tabpanel" aria-labelledby="list-settings-list">ff</div>
    </div>
  </div>
</div>
)
   }

}
function onClickOfList(evt){
  console.log(evt.target.id)// get the id.
}

List.propTypes = {
};

export default List;


