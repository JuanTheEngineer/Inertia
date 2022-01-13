import PlanList from './PlanList';
import useFetch from './useFetch';

const Home = () => {

    const { data: plans, isLoading, error } = useFetch('http://localhost:8000/plans');

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div> }
            { plans && <PlanList plans={ plans } title="Suggestions"/> }
        </div>
     );
}
 
export default Home;