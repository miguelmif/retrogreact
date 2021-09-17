import { Switch, Route } from "react-router-dom"
import { Home, Pag2, Pag3, Pag4 } from "pages"



const Routes = () => {
    return (
        <Switch>
            <Route path="//" component={Home} />
            <Route path="/Jogos" component={Pag2} />
            <Route path="/Consoles" component={Pag3} />
            <Route path="/Sobrenos" component={Pag4} />
        </Switch>
    )
}

export default Routes