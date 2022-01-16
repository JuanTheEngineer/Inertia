import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Image from "./Image"


const PlanDetails = () => {

    const { id } = useParams();
    const { data: plan, error, isPending } = useFetch('http://localhost:5000/plans/' + id);

    return ( 
        <div className="plan-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { plan && (
                <article>
                    <h2>{ plan.title }</h2>
                    <p>Written by { plan.author }</p>
                </article>
            )}
            { plan && plan.steps.map(plan => (
                <div className="plan-preview" key={ plan.id }>
                    <h2>{ plan && plan.exercises.map(step => (
                            <div className="plan-preview" key={ step.id }>
                                <h2>{ step.name } </h2>
                                <img src={require(`./assests/${ step.demo }`).default} height={200}/>
                                <p>{ step.reps } REPS</p> 
                                <p>{ step.sets } SETS</p> 
                                <p>{ step.note && <p>Note: { step.note }</p>}</p>                   
                            </div>
                        )) }
                    </h2>                    
                </div>
            )) }
        </div>
     );
}
 
export default PlanDetails;