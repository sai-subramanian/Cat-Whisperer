import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [ProductModule,GroupModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
