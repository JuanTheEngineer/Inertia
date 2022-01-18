import './index.css';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Image from "./Image"


const PlanDetails = () => {

    const { id } = useParams();
    const { data: plan, error, isPending } = useFetch("https://inertia-workouts.herokuapp.com/plans/" + id);

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
                    <div>{ plan && plan.exercises.map(step => (
                            <div className="plan-preview" key={ step.id }>
                                <h2>{ step.name } </h2>
                                <div class="description" >
                                    <div id="divBlock">{ step.reps }</div>
                                    <div id="divLabel">REPS</div>
                                    <br/>
                                    <div id="divBlock">{ step.sets }</div>
                                    <div id="divLabel">SETS</div>
                                </div>     
                                <div>
                                    <img class="examples" src={require(`./assests/${ step.demo }`).default}/>    
                                </div>
                                <div id="divNote">{ step.note && <div id="divNote">Note: { step.note }</div>}</div>                 
                            </div>
                        )) }
                    </div>                    
                </div>
            )) }
        </div>
     );
}
 
export default PlanDetails;