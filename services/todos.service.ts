import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from '../entities/todos.entity';

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
    return this.todosRepository.create(todo);
  }

}
