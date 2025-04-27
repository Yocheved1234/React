import swal from "sweetalert";
import { addDegem } from "../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import './styleBose.css'; // אל תשכח לכלול את הקובץ הזה

export const AddDegem = () => {
    const nav = useNavigate();
    const d = useSelector(stor => stor.degem);
    const dis = useDispatch();

    const send = (event) => {
        event.preventDefault();

        const deg = {
            company: event.target[0].value,
            model: event.target[1].value,
            typeCar: event.target[2].value,
        };
        
        let id = 0;
        for (let i = 0; i < d.length; i++) {
            if (d[i].id > id)
                id = d[i].id;
        }

        const newDegem = {
            id: parseInt(id) + 1,
            company: deg.company,
            model: deg.model,
            typeCar: deg.typeCar,
        };

        dis(addDegem(newDegem));

        swal('Hello Boss', 'Your car has been added successfully', 'success');
        nav('/Boss/');
    };

    return (
        <div className="form-container">
            <h4>הכנס פרטי דגם</h4>
            <form onSubmit={(e) => send(e)}>
                <label htmlFor="company">Company:</label>
                <input id="company" type="text" placeholder="Input company" />

                <label htmlFor="model">Model:</label>
                <input id="model" type="text" placeholder="Input model" />

                <label htmlFor="typeCar">Type Car:</label>
                <input id="typeCar" type="text" placeholder="Input type car" />

                <input type="submit" value="Submit" />
            </form>
            <button onClick={() => nav('/Boss')}>Back to Boss</button>
        </div>
    );
};

export default AddDegem;