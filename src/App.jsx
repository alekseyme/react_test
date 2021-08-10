import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Info from './Info';
import Home from './Home';
import Nums from './Nums';

function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Главная</Link>
					</li>
					<li>
						<Link to="/about">Инфо</Link>
					</li>
				</ul>
			</nav>
			<main>
				<div className="container">
					<Switch>
						<Route exact path="/">
							<Home title="Заголовок на главной странице" />
						</Route>
						<Route exact path="/about">
							<Info text="Пример текста в инфо" />
						</Route>
						<Route exact path="/nums/:num">
							<Nums />
						</Route>
						<Redirect to="/" />
					</Switch>
				</div>
			</main>
		</Router>
	);
}

export default App;
