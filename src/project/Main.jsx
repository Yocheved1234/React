import { Provider } from "react-redux"
import store from "./redux/Store"
import { BrowserRouter } from "react-router-dom"
import { Nav } from "./Nav"
import { Routing } from "./Routing"
import myStore from "./redux/Store"



export const Main = () => {
    return <>
        <Provider store={myStore}>
            <BrowserRouter>
                <Nav></Nav>
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
    </>
}