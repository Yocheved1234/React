import { Route, Routes } from "react-router-dom"
import { Login } from "./Login"
import { Submit } from "./Submit"
import { Car } from "./Car"
import { Big } from "./Big"
import { Rent } from "./Rent"
import { AddCare} from "./Boss/AddCare"      
import {Backing} from "./Backing"
import {Card} from "./Card"
import {Boss} from "./Boss/Boss"
import {SeeR} from "./Boss/SeeR"
import {Home} from "./Home"
import { RemoveCar } from "./Boss/RemoveCar"
import { UpdateCar } from "./Boss/UpdateCar"
import { TypesPrice } from "./Boss/TypesPrice"
import { TypesCarsPrice } from "./Boss/TypesCarsPrice"
import { AddDegem } from "./Boss/AddDegem"
import { Degem } from "./Boss/Degem"
import { Users } from "./Users"
import { Contact } from "./Contact"



export const Routing = () => {

    return <>
        <Routes>
        <Route path="Card" element={<Card></Card>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="Submit" element={<Submit></Submit>}></Route>
            <Route path="Car" element={<Car></Car>}></Route>
            <Route path="Big/:index" element={<Big></Big>}></Route> 
            <Route path="Rent/:index" element={<Rent></Rent>}></Route> 
            <Route path="Backing" element={<Backing></Backing>}></Route> 
            <Route path="Boss" element={<Boss></Boss>}></Route> 
            <Route path="AddCare" element={<AddCare></AddCare>}></Route> 
            <Route path="RemoveCar" element={<RemoveCar></RemoveCar>}></Route> 
            <Route path="addDegem" element={<AddDegem></AddDegem>}></Route> 
            <Route path="UpdateCar" element={<UpdateCar></UpdateCar>}></Route> 
            <Route path="SeeR" element={<SeeR></SeeR>}></Route> 
            <Route path="Home" element={<Home></Home>}></Route> 
            <Route path="TypesPrice" element={<TypesPrice></TypesPrice>}></Route> 
            <Route path="TypesCarsPrice" element={<TypesCarsPrice></TypesCarsPrice>}></Route> 
            <Route path="Degem" element={<Degem></Degem>}></Route> 
            <Route path="Contact" element={<Contact></Contact>}></Route>
            <Route path="Users" element={<Users></Users>}></Route> 

        </Routes>
    </>
}