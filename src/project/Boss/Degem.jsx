import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import './styleBose.css';
import { useState } from 'react';

export const Degem = () => {
    const d = useSelector(store => store.degem);
    console.log(d);

    const [carlistState, setCarlistState] = useState([...d]);

    const navigate = useNavigate();

    let list = [...d];
    console.log(list);

    const type1 = (event) => {
        list = [...d];
        list = list.filter((item) => item.typeCar === event);
        setCarlistState(list);
    };

    const company = (event) => {
        list = [...d];
        list = list.filter((item) => item.company === event);        
        setCarlistState(list);
    };

    const all = () => {
        setCarlistState([...d]);
    };

    return (
        <div className="car-container">
            <button className="car-button" onClick={() => all()}>להצגת הכל</button>

            <select className="car-select" onChange={(e) => company(e.target.value)}>
                <option value="1">סינון לפי חברה</option>
                <option value="merzedes">Masda</option>
                <option value="yunday">Mrtzedes</option>
                <option value="caya">Yundy</option>
                <option value="tesla">Kia</option>
                <option value="tesla">Tesler</option>
                <option value="tesla">Tayuta</option>
            </select>

            <select className="car-select" onChange={(e) => type1(e.target.value)}>
                <option value="0">סינון לפי סוג רכב</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <table className="car-table">
                <tbody>
                    {carlistState && carlistState.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div><h3>id:</h3> {item.id}</div>
                                <div><h3>company:</h3> {item.company}</div>
                                <div><h3>model:</h3> {item.model}</div>
                                <div><h3>typeCar:</h3> {item.typeCar}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Degem;