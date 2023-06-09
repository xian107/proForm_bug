import { useCreation } from 'ahooks';

import { Form } from 'antd';

import { useSelector } from 'react-redux';
import { BetaSchemaForm } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';

function Index(props: any) {
	const [form] = Form.useForm();
	const { constants: { shipment_status = [] } = {} } = useSelector(
		(state: any) => state.common
	);

	const [searchParams, setSearchParams] = useState([] as any);
	useEffect(() => {
		setTimeout(() => {
			setSearchParams([{ id: 1 }]);
		}, 500);
	}, []);

	const columnsSearch = useCreation(
		() => [
			{
				title: '订单号',
				dataIndex: 'id',
				width: 170,
			},
			{
				title: '订单号',
				dataIndex: 's',
				valueType: 'select',
				fieldProps: {
					placeholder: '状态',
					style: { width: 100 },
					options: shipment_status,
					showSearch: true,
					optionFilterProp: 'children',
					allowClear: true,
				},
				width: 170,
			},
		],
		[shipment_status]
	);

	console.log('ddddddddddddddddddddddddddddddddddddddddddd', shipment_status);
	return (
		<>
			<BetaSchemaForm
				shouldUpdate={false}
				preserve={false}
				columns={columnsSearch}
				form={form}
			/>
		</>
	);
}

export default Index;
