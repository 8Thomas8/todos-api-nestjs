import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from '../entities/todos.entity';
import { DeleteResult, UpdateResult } from  'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>
  ) {}

  findAll(): Promise<Todos[]> {
    return this.todosRepository.find();
  }

  findById(id): Promise<Todos[]> {
    return this.todosRepository.findByIds(id);
  }

  addTodo(todo) {
    return this.todosRepository.save(todo);
  }

  delTodo(id): Promise<DeleteResult> {
    return this.todosRepository.delete(id);
  }

  updateTodo(id, todoData): Promise<UpdateResult> {
    return this.todosRepository.update(id, todoData);
  }

}
