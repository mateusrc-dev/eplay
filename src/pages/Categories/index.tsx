import ProductsList from '../../components/ProductsList'

import {
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery,
  useGetFightGamesQuery,
  useGetActionGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesEsportes } = useGetSportsGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesRpg } = useGetRpgGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesAcao } = useGetActionGamesQuery()

  if (gamesEsportes && gamesSimulacao && gamesRpg && gamesLuta && gamesAcao) {
    return (
      <>
        <ProductsList
          id="action"
          games={gamesAcao}
          title="Ação"
          background="black"
        />
        <ProductsList
          id="sports"
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          id="simulation"
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
        <ProductsList
          id="fight"
          games={gamesLuta}
          title="Luta"
          background="gray"
        />
        <ProductsList
          id="rpg"
          games={gamesRpg}
          title="RPG"
          background="black"
        />
      </>
    )
  } else {
    return <>Carregando...</>
  }
}

export default Categories
