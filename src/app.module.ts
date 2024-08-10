import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { GroupModule } from './group/group.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [ProductModule, GroupModule, QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
