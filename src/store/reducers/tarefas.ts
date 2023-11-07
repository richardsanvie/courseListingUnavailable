import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'lorem1',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem1'
    },
    {
      id: 2,
      descricao: 'lorem2',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'lorem2'
    },
    {
      id: 3,
      descricao: 'lorem3',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem3'
    },
    {
      id: 4,
      descricao: 'lorem4',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem4'
    },
    {
      id: 5,
      descricao: 'loSrem5',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'loQWrem5'
    },
    {
      id: 6,
      descricao: 'lorWEQem6',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'loremS6'
    },
    {
      id: 7,
      descricao: 'lorem7',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem7'
    },
    {
      id: 8,
      descricao: 'lorem8',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem8'
    },
    {
      id: 9,
      descricao: 'lorem9',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem9'
    },
    {
      id: 10,
      descricao: 'lorem10',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem10'
    },
    {
      id: 11,
      descricao: 'lorem11',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem11'
    },
    {
      id: 12,
      descricao: 'lorem12',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem12'
    },
    {
      id: 13,
      descricao: 'lorem13',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'lorem13'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
