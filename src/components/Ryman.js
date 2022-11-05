import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"


export const Ryman = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}