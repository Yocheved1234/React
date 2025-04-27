import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import './style.css'


export const Big = () => {
    
    const params = useParams();
    const { index } = params;
    const navigate = useNavigate();

    const car = useSelector(store => store.car);

    const back = () => {
        navigate(`/Car/`);
    };

    const rent = (index) => {
        navigate(`/Rent/${index-1}/`);
    };

    let u = car.filter(x => x.name === car.name)[index-1];
    console.log(u);
    


    const get=()=>{
        console.log(u);
        
        if(u.uvadebul===true){
            return <button onClick={() => rent(index)}>To Rent</button>

        }
    }
    return (
        <div className="container">
            <h4>Car Details - {index}</h4>
            <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/pic/${u.pic}.jpg`} alt="Car Picture" />
            </div>
            <ul>
                <li><strong>Degem:</strong> {u.degem}</li>
                <li><strong>City:</strong> {u.city}</li>
                <li><strong>Byn Lisens:</strong> {u.numLisens}</li>
                <li><strong>Number of Seats:</strong> {u.numSits}</li>
                <li><strong>Year:</strong> {u.year}</li>
                <li><strong>Type to Drive:</strong> {u.typeToDrive}</li>
                <li><strong>Price for Hire:</strong> {u.priceForHaer}</li>
                <li><strong>Need Per Km:</strong> {u.needPerKm}</li>
                <li><strong>Amount of Fuel:</strong> {u.umountPetrul}</li>
                <li><strong>Street:</strong> {u.street}</li>
                <li><strong>Additional Info:</strong> {u.uvadebul}</li>
            </ul>
            <div className="button-group">
                <button onClick={() => back()}>Back</button>
                {/* <button onClick={() => rent(index)}>To Rent</button> */}
                <botton>{get()}</botton>
            </div>
        </div>
    );
};

export default Big;
