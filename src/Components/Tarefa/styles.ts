import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornadeCorFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.amarelo
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.verde
    if (props.status === enums.Status.CONCLUIDA) return variaveis.vermelho
  }
  return '#aae'
}
console.log()

export const Card = styled.div``
export const Titulo = styled.h3``
export const Tag = styled.span<TagProps>`
  background-color: ${(props) => retornadeCorFundo(props)};
`
export const Descricao = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
`
export const BarraAcoes = styled.div``
export const Botao = styled.button`
  background-color: ${variaveis.vermelho};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.amarelo};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.verde};
`
