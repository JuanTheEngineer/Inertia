import { Link } from "react-router-dom";

const PlanList = ({ plans, title}) => {

    return ( 
        <div className="plan-list"> 
            <h2>{ title }</h2>
            { plans.map(plan => (
                <div className="plan-preview" key={ plan.id }>
                    <Link to={ `/plans/${ plan.id }` }>
                        <h2>{ plan.title } </h2>
                        <p>Written by { plan.author }</p> 
                        <br/>
                    </Link>
                    
                </div>
            )) }
        </div>
     );
}
 
export default PlanList;