import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 10px;
  background-color: ${(props) => (props.ativo ? 'red' : 'blue')};
`
export const Contador = styled.div``
export const Label = styled.div``
