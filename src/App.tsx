import React, { Suspense } from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Outlet,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRequest } from 'ahooks';
import { Spin } from 'antd';

function pageRouter(item: any) {
	const Component: any = React.lazy(
		() => import(/* webpackChunkName: "[request]" */ '@/pages/order')
	);
	return (
		<Route
			key={item.path}
			path={item.path}
			element={
				<Suspense fallback={<Spin />}>
					<Component routeTitle={item.name} />
				</Suspense>
			}
		/>
	);
}
// 接口获取
const routes: any = [
	{
		name: '订单管理',
		path: '/order',
		icon: 'icon-quanbudingdan',
		component: '/order',
	},
];
const Error = ({ children }: any) => {
	return <div>上传错误{children}</div>;
};
const LayoutContainer = ({ children }: any) => {
	return (
		<div>
			<Outlet />
		</div>
	);
};
function App() {
	const dispatch = useDispatch();
	const { access_token } = useSelector((state: any) => state.common);
	function getUsername(id: number): Promise<string> {
		return new Promise((resolve: any) => {
			setTimeout(() => {
				resolve({
					code: 0,
					shipment_status: [
						{ value: 1, label: '已下单' },
						{ value: 2, label: '已发货' },
					],
				});
			}, 1000);
		});
	}

	useRequest(getUsername, {
		onSuccess(res: any) {
			if (res.code === 0) {
				delete res.code;
				delete res.msg;
				dispatch.common.SET_CONSTANTS(res);
			}
		},
	});
	return (
		<Error access_token={access_token}>
			<BrowserRouter>
				<Routes>
					<Route index element={<Navigate to="/order" />} />
					<Route path="/" element={<LayoutContainer />}>
						{routes.map((item: any) => pageRouter(item))}
					</Route>
				</Routes>
			</BrowserRouter>
		</Error>
	);
}

export default App;
