import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode} from '@nestjs/common';
import { TodosService } from '../../services/todos.service';
import { Todos } from '../../entities/todos.entity';
import { CreateTodoDto } from '../../dto/create-todo.dto';
import { UpdateTodoDto } from '../../dto/update-todo.dto';

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

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id) {
    this.todosService.delTodo(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateTodoDto: UpdateTodoDto): Promise<any> {
    return this.todosService.updateTodo(id, updateTodoDto);
  }  

}
