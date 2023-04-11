import { Greet } from './components/Greet'

function App() {
	const user_one = {
		f_name: 'martin',
		l_name: 'doe',
		age: 32,
		messages: 10,
		admin: true,
	}
	return (
		<div className="App">
			<Greet userData={user_one} />
		</div>
	)
}

export default App
