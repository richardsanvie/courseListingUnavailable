import Tarefa from '../../Tarefa'
import { Container } from './styles'
import * as enums from '../../../Utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'Fazer Exercícios Físicos1',
    descricao: 'Ir à academia e fazer uma sessão de treino cardio.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Mantimentos2',
    descricao: 'Fazer compras no supermercado para a semana.',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Fazer3',
    descricao: 'Ir à academia e fazer uma sessão de treino cardio.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Comprar Mantimentos4',
    descricao: 'Fazer compras no supermercado para a semana.',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Exercícios Físicos5',
    descricao: 'Ir à academia e fazer uma sessão de treino cardio.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Mantimentos6',
    descricao: 'Fazer compras no supermercado para a semana.',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Fazer7',
    descricao: 'Ir à academia e fazer uma sessão de treino cardio.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Comprar Mantimentos8',
    descricao: 'Fazer compras no supermercado para a semana.',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Fazer Exercícios Físicos9',
    descricao: 'Ir à academia e fazer uma sessão de treino cardio.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Mantimentos10',
    descricao: 'Fazer compras no supermercado para a semana.',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Fazer11',
    descricao: 'Ir à academia e fazer uma sessão de treino cardio.',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Comprar Mantimentos12',
    descricao: 'Fazer compras no supermercado para a semana.',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
