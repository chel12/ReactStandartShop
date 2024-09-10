import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { ROUTES } from '../../utils/routes';
import SingleProducts from '../Products/SingleProducts';

const AppRoutes = () => (
	<Routes>
		<Route index element={<Home />}></Route>
		<Route path={ROUTES.PRODUCT} element={<SingleProducts />}></Route>
	</Routes>
);

export default AppRoutes;
