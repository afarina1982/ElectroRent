import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArriendosModule } from './arriendos/arriendos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ArriendoDispositivosModule } from './arriendo_dispositivos/arriendo_dispositivos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { DispositivosModule } from './dispositivos/dispositivos.module';

@Module({
  imports: [ArriendosModule, ClientesModule, ArriendoDispositivosModule, CategoriasModule, InventariosModule, DispositivosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
