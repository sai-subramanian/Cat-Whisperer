import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { QuestionsRepository } from './questions.provider';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { GroupModule } from '../group/group.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => GroupModule),
    forwardRef(() => ProductModule),
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService, ...QuestionsRepository],
})
export class QuestionsModule {}
