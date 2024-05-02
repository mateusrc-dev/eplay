import ProductsList from '../../components/ProductsList'

import {
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery,
  useGetFightGamesQuery,
  useGetActionGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesSports, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: gamesSimulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: gamesFight, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: gamesAction, isLoading: isLoadingAction } =
    useGetActionGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        games={gamesAction}
        title="Ação"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        games={gamesSports}
        title="Esportes"
        background="gray"
        isLoading={isLoadingSports}
      />
      <ProductsList
        id="simulation"
        games={gamesSimulation}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="fight"
        games={gamesFight}
        title="Luta"
        background="gray"
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        games={gamesRpg}
        title="RPG"
        background="black"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
