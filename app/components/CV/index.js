import React,{Component} from 'react';
import CommonCarousel from 'components/CommonComponents/CommonCarousel'
import List from 'components/CommonComponents/List';
import Pagination from 'components/Pagination';


export class CV extends Component { // eslint-disable-line react/prefer-stateless-function


  render(){

   return(
<div key ="CV" id="cv">
<section key ="CommonCarousel">

		<div>
		<CommonCarousel />
		</div>
</section>
		<section key ="category">
		<div>
		<List id="category" key="category"/>
		 
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