import { createModel } from '@rematch/core'
import type { RootModel } from '.';

type PlayersState = {

	constants?: any,
}

export const common = createModel<RootModel>()({
	state: {
		
		constants:[],

	} as PlayersState,
	reducers: {

		// 静态数据
		SET_CONSTANTS: (state: PlayersState, data: any) => ({
			...state,
			constants:data,
		}),

	},
	
	
})
