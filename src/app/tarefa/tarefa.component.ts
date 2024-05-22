import { Component } from '@angular/core';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  tarefas: Tarefa[] = [
    { id: 1, descricao: 'Comprar pão', concluida: false },
    { id: 2, descricao: 'Levar o cachorro para passear', concluida: false },
  ];

  concluirTarefa(tarefa: Tarefa) {
    tarefa.concluida = true;
  }
}
