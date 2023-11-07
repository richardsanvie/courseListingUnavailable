import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import * as S from './styles'
import TarefaClass from '../../models/Tarefa'
import { remover, editar } from '../../store/reducers/tarefas'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  const cancelaEdicao = () => {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
        disabled={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelaEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
