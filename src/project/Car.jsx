import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import './style.css';
import { useState } from 'react';


export const Car = () => {
    const Car = useSelector(store => store.car);
    const c = useSelector(store => store.currentUser);
    const t = useSelector(store => store.typeToDrive);
    const d = useSelector(store => store.degem);
    const tC = useSelector(store => store.typeCar);
    const [carlistState, setCarlistState] = useState([...Car]);


    const navigate = useNavigate();

    const seeD = (index) => {
        if (c.id) {
            navigate(`/Big/${index}/`);
        } else {
            swal('הכניסה לפרטים לרשומים בלבד', 'לחץ אישור לכניסה להרשמה', 'error');
            navigate('/Submit/');
        }
    };

    let list = [...Car];
    let list1 = [...t];
    let list3 = [...tC];
    const city = (event) => {
        list = [...Car];
        list = list.filter((item) => item.city === event && item.uvadebul === true);
        setCarlistState(list);
    };

    const sits1 = (event) => {
        list = [...Car];
        list = list.filter((item) => item.numSits === event && item.uvadebul === true);
        setCarlistState(list);
    };

    const all = () => {
        setCarlistState([...Car]);
    };

    const typeToDrive = (event) => {
        list1 = [...t];
        list1 = list1.filter((item) => item.type === event)[0];
        // for (let j = 0; j < list1.length; j++) {
        //     x = list1[j].id;
        // }
        let x = list1.id;

        list = list.filter((item) => item.typeToDrive === x && item.uvadebul === true);
        setCarlistState(list);
    };

    const typecar = (event) => {
        let x = 0;
        list3 = [...tC];
        list3 = list3.filter((item) => item.teur === event);
        for (let j = 0; j < list3.length; j++) {
            x = list3[j].id;
        }
        for (let i = 0; i < d.length; i++) {
            if (d[i].typeCar === x) {
                list3 = Car.filter((item) => item.degem === d[i].id && item.uvadebul === true);
            }
        }
        setCarlistState(list3);
    };

    const companyDegem = (item) => {
        for (let i = 0; i < d.length; i++) {
            if (d[i].id === item) return d[i].company;
        }
    };

    const modelDegem = (item) => {
        for (let i = 0; i < d.length; i++) {
            if (d[i].id === item) return d[i].model;
        }
    };

    const typeCar = (item) => {
        for (let j = 0; j < d.length; j++) {
            if (d[j].id === item) {
                for (let k = 0; k < tC.length; k++) {
                    if (tC[k].id === d[j].typeCar) return tC[k].teur;
                }
            }
        }
    };

    const type = (item) => {
        if (item.typeToDrive === 1) return "⛽";
        if (item.typeToDrive === 2) return "🔋";
        if (item.typeToDrive === 3) return "🧄";
        if (item.typeToDrive === 4) return "⚡";
        if (item.typeToDrive === 5) return "🔌";
    };

    const uv = (item) => {
        return item.uvadebul ? "✔️" : "❌";
    };

    return (
        <div className="car-container">
            <div className="filters">
                <button className="car-button" onClick={() => all()}>הצגת הכל</button>
                <select className="car-select" onChange={(e) => city(e.target.value)}>
                    <option value="1">סינון לפי עיר</option>
                    <option value="jerusalem">ירושלים</option>
                    <option value="בני ברק">בני ברק</option>
                    <option value="צפת">צפת</option>
                    <option value="ירוחם">ירוחם</option>
                </select>
                <select className="car-select" onChange={(e) => sits1(e.target.value)}>
                    <option value="1">סינון לפי מקומות ישיבה</option>
                    <option value="7">7</option>
                    <option value="5">5</option>
                    <option value="9">9</option>
                </select>
                <select className="car-select" onChange={(e) => typeToDrive(e.target.value)}>
                    <option value="1">סינון לפי סוג הנעה</option>
                    <option value="electrisity">חשמל</option>
                    <option value="hibridy">היברידי</option>
                    <option value="gaz">גז</option>
                    <option value="baterry">סוללה</option>
                </select>
                <select className="car-select" onChange={(e) => typecar(e.target.value)}>
                    <option value="1">סינון לפי סוג רכב</option>
                    <option value="מסחרי">מסחרי</option>
                    <option value="סטיישן">סטיישן</option>
                    <option value="מנהלים">מנהלים</option>
                    <option value="פרטי">פרטי</option>
                    <option value="בימבה">בימבה</option>
                    <option value="משפחתי">משפחתי</option>
                </select>
            </div>

            <table className="car-table">
                <tbody>
                    {carlistState && carlistState.map((item, index) =>
                        <tr key={index}>
                            <td className="car-image-cell">
                                <img src={`${process.env.PUBLIC_URL}/pic/${item.pic}.jpg`} alt={"car"} />
                            </td>
                            <td>
                                <div><strong>מספר רישוי: {item.numLisens}</strong></div>
                                <div><strong>חברה: {companyDegem(item.degem)}</strong></div>
                                <div><strong>מודל: {modelDegem(item.degem)}</strong></div>
                                <div><strong>סוג: {typeCar(item.degem)}</strong></div>
                                <div><strong>סוג הנעה: {type(item)}</strong></div>
                                <div><strong>עיר: {item.city}</strong></div>
                                <div><strong>כמות מקומות: {item.numSits}</strong></div>
                                <div><strong>האם פנוי: {uv(item)}</strong></div>
                            </td>
                            <td>
                                <button className="car-button" onClick={() => seeD(item.id)}>ראה פרטים</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Car;