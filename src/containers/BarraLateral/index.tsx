import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../Components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as S from './styles'

export default function BarraLateral() {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <h3>ui</h3>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={3} />
          <FiltroCard legenda="concluidas" contador={4} />
          <FiltroCard legenda="urgentes" contador={5} />
          <FiltroCard legenda="importantes" contador={6} />
          <FiltroCard legenda="normal" contador={7} />
          <FiltroCard legenda="todas" contador={10} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
