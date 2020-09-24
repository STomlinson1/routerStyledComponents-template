import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from '../../styles';

import { Home } from '../../pages';

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
