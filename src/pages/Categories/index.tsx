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
        <ProductsList games={gamesAcao} title="Ação" background="black" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
        <ProductsList games={gamesLuta} title="Luta" background="gray" />
        <ProductsList games={gamesRpg} title="RPG" background="black" />
      </>
    )
  } else {
    return <>Carregando...</>
  }
}

export default Categories
