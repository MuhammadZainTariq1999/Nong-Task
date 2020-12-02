import React  from 'react';

import {Route, Switch , Redirect} from "react-router-dom";

import Main from "./Main"
import Home from "./Home"
const Router =()=>{
return(<>
	<Switch>
		<Route exact path='/' component={Main}/>
		<Route exact path='/Home' component={Home}/>
		<Redirect to ="/" />
	</Switch></>);
};
export default Router;