import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'

export default function BarraLateral() {
  return (
    <S.Aside>
      <div>
        <h3>ui</h3>
        <input type="text" placeholder="Buscar" />
        <div>
          <FiltroCard legenda="pendentes" contador={3} />
          <FiltroCard legenda="concluidas" contador={4} />
          <FiltroCard legenda="urgentes" contador={5} />
          <FiltroCard legenda="importantes" contador={6} />
          <FiltroCard legenda="normal" contador={7} />
          <FiltroCard legenda="todas" contador={10} ativo />
        </div>
      </div>
    </S.Aside>
  )
}
