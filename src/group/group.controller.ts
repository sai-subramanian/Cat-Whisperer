import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { GroupService } from './group.service';
import { addGroupDto, updateGroupDto } from './dto/group.dto';



@Controller('/Group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  async getGroups(@Query('groupId') groupId: string) {
    try {
      return await this.groupService.getGroups(groupId);
    } catch (e) {
      return Error(e);
    }
  }

  @Post()
  async addGroups(@Body() request: addGroupDto) {
    try {
      return await this.groupService.addGroup(request);
    } catch (e) {
      return { isSuccess: false, message: e?.message || JSON.stringify(e) };
    }
  }

  @Put('/update')
  async updateGroups(
    @Query('groupId') groupId: string,
    @Body() request: updateGroupDto,
  ) {
    try {
      return await this.groupService.updateGroup(request, groupId);
    } catch (e) {
      return { isSuccess: false, message: e?.message || JSON.stringify(e) };
    }
  }

  @Delete()
  async deleteGroups(@Query('groupId') groupId:string) {
    try {
        return await this.groupService.deleteGroup(groupId);
      } catch (e) {
        return Error(e);
      }
  }
}
