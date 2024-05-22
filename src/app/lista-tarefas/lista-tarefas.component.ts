import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <ul class="lista-tarefas">
      <li *ngFor="let tarefa of tarefas; index as i" [ngStyle]="{'text-decoration': tarefa.concluida ? 'line-through' : 'none'}" class="tarefa">
        <div class="tarefa-conteudo">{{ tarefa.descricao }}</div>
        <button class="botao-concluir" [ngStyle]="{'background-color': tarefa.concluida ? '#0000ff' : 'black'}" (click)="toggleTarefa(tarefa)">{{ tarefa.concluida ? 'Concluído' : 'Concluir' }}</button>
      </li>
    </ul>
  `,
  styles: [`
    .lista-tarefas {
      list-style-type: none;
      padding-left: 0;
    }

    @keyframes flutuar {
      0% {
          transform: translateY(0);
      }
      50% {
          transform: translateY(-5px);
      }
      100% {
          transform: translateY(0);
      }
  }

  .tarefa {
    margin-bottom: 1em;
    padding: 0.625em 0.625em 0.625em 0.9375em;
    border-width: medium;
    border-style: solid;
    border-color: black;
    border-radius: 50px;
    background: none;
    display: flex;
    color: blue;
    font-weight: 700;
    align-items: center;
    width: 300px; /* Define o tamanho fixo da caixa que contém as tarefas */
    transition: transform 0.2s ease, color 0.2s ease, background 0.2s ease;
}


    .tarefa:hover {
      background-color: black;
      color: white;
      scale: 1.05;
      animation: flutuar 1.5s ease-in-out infinite;
      cursor: pointer;
    }

    .tarefa-conteudo {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .botao-concluir {
      width: 100px;
      height: 30px;
      margin-left: 10px;
      border: none;
      border-radius: 30px;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

  `]
})
export class ListaTarefasComponent {
  tarefas = [
    { descricao: '07:00 - Café da manhã', concluida: false },
    { descricao: '10:00 - Estudar', concluida: true },
    { descricao: '12:00 - caminhada', concluida: false },
    { descricao: '16:00 - Van faculdade', concluida: false },
    { descricao: '00:00 - chegar em casa da faculdade', concluida: true },
  ];

  novaTarefa: string = '';

  toggleTarefa(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }

  adicionarTarefa() {
    if (this.novaTarefa.trim() !== '') {
      this.tarefas.push({ descricao: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
    }
  }
}
