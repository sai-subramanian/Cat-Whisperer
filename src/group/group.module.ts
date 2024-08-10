import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GroupService } from './group.service';
import { GroupRepository } from './group.provider';
import { GroupController } from './group.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [GroupController],
  providers: [GroupService, ...GroupRepository],
  exports: [GroupService],
})
export class GroupModule {}
