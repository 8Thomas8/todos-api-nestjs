import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TodosService } from '../../services/todos.service';
import { Todos } from '../../entities/todos.entity';
import { CreateTodoDto } from '../../dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Promise<Todos[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id): Promise<Todos[]> {
    return this.todosService.findById(id);
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.addTodo(createTodoDto);
  }

}
