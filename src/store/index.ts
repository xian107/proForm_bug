import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import loading, { ExtraModelsFromLoading } from '@rematch/loading'
import { models, RootModel } from './models'

type FullModel = ExtraModelsFromLoading<RootModel>
export const store = init<RootModel, FullModel>({
	models,
	plugins: [
		loading(),
	],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel, FullModel>
