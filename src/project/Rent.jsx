
import swal from "sweetalert";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setCar, addRent } from "./redux/Actions";

export const Rent = () => {
    const currentUser = useSelector(Store => Store.currentUser)
    const dd = new Date()
    const navigate = useNavigate()
    const dis = useDispatch()
    const params = useParams()
    const { index } = params
    const car = useSelector(store => store.car)
    const r = useSelector(store => store.rent)

    let u = car[index]

    const back = () => {
        navigate(`/Car/`)
    }

    const clickToGo = () => {

        if (u.uvadebul) {

            const newCar =
            {
                id: u.id,
                numLisens: u.numLisens,
                degem: u.degem,
                numSits: u.numSits,
                pic: u.pic,
                year: u.year,
                typeToDrive: u.typeToDrive,
                priceForHaer: u.priceForHaer,
                needPerKm: u.needPerKm,
                umountPetrul: u.umountPetrul,
                street: u.street,
                city: u.city,
                uvadebul: false
            }
            
            let id=parseInt(r[0].id)

            for(let i=0; i<r.length; i++){
                if(parseInt(r[i].id)>id)
                    id=parseInt(r[i].id)
            }
            id=id+1;
            const newRent = {
                id: id,
                code: currentUser.id,
                codeCar: u.id,
                date: `${dd.getDate()}/${dd.getMonth() + 1}/${dd.getFullYear()}`,
                time: `${dd.getHours()}:${dd.getMinutes()}`
            }

            
            dis(setCar(newCar, index))
            dis(addRent(newRent))

            swal(` הרכב עומד לרשותך במיקום🚗🚕🚎🚔  עיר: ${u.city} רחוב:${u.street}`, `קוד ההשאלה שלך הינו:${id}`, "success")
            navigate(`/car/`)

        }
        else {
            swal(`The car is not uvadibul!!`, 'To order a nother car press ok!!', 'error')
            navigate(`/car/`)
        }

    }
    return <>
        <label>licenseNumber:  {car[index].numLisens}</label><br></br>
        <label>date:{dd.getDate()}/{dd.getMonth() + 1}/{dd.getFullYear()}</label><br></br>
        <label>hour: {dd.getHours()}:{dd.getMinutes()}</label><br></br>
        <button onClick={() => { clickToGo() }}>אישור</button>
        <button onClick={() => back()}>back</button>
    </>
}
export default Rent;  