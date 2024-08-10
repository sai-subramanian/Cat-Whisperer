import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Group } from './entity/group.entity';
import { addGroupDto, updateGroupDto } from './dto/group.dto';


@Injectable()
export class GroupService {
  constructor(
    @Inject('GROUP_REPOSITORY')
    private GroupRepository: Repository<Group>,
  ) {}

  async getGroups(groupId: string) {
    try{
      const group = await this.GroupRepository.findOne({
        where: { id: groupId },
      });
  
      return group;
    }catch(e){
      throw Error(e);
    }
   
  }

  async addGroup(request: addGroupDto) {
    try{
      const group = new Group();
      Object.assign(group, request);
      group.id = uuidv4();
      group.groupId = uuidv4();
      group.createdAt = new Date();
      group.isActive = true;
      await this.GroupRepository.save(group);

      return group;
    }catch(e){
      throw Error(e);
    }
    
  }

  async updateGroup(request: updateGroupDto, GroupId: string) {
    try{
        // const GroupToUpdate = await this.GroupRepository.findOne({where:{id:GroupId}})

      this.GroupRepository.update({ id: GroupId }, request);
    }catch(e){
      throw Error(e);
    }
  }

  async deleteGroup(GroupId: string) {
    try {
      const groupToDelete = await this.GroupRepository.findOne({
        where: { id: GroupId },
      });

      groupToDelete.isActive = false;

      return await this.GroupRepository.update(
        { id: groupToDelete.id },
        groupToDelete,
      );
    } catch (e) {
      throw Error(e);
    }
  }
}
