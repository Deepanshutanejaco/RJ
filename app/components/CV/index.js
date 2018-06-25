import React,{Component} from 'react';
import CommonCarousel from 'components/CommonComponents/CommonCarousel'
import List from 'components/CommonComponents/List';
import Pagination from 'components/CommonComponents/Pagination';


export class CV extends Component { // eslint-disable-line react/prefer-stateless-function


  render(){

   return(
<div key ="CV" id="cv">
<div>
<CommonCarousel />
</div>

<section key ="category">
<div>
<List id="category" key="category"/>
 
</div>
</section>

<section key ="Subcategory">
<div>
<List key="sub" id="sub"/>
 
</div>
</section>
<section key ="resumeWithPagination">
<Pagination />
<div>
</div>
</section>

</div>
    )


  }
}


export default CV;