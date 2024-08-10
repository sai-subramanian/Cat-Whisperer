import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { addQuestionsDto, updateQuestionsDto } from './dto/questions.dto';



@Controller('/questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get('/byId')
  async getQuestionsById(@Query('questionId') questionId: string) {
    try {
      return await this.questionsService.getQuestionsById(questionId);
    } catch (e) {
      return Error(e);
    }
  }

  @Get('/byGroupId')
  async getQuestionsByGroupId(@Query('groupId') groupId: string) {
    try {
      return await this.questionsService.getQuestionsOnGroup(groupId);
    } catch (e) {
      return Error(e);
    }
  }

  @Post('/addSingle')
  async addQuestionsSingle(@Body() request: addQuestionsDto) {
    try {
      return await this.questionsService.addQuestions(request);
    } catch (e) {
      return { isSuccess: false, message: e?.message || JSON.stringify(e) };
    }
  }

  @Post('/addBulk')
  async addQuestionsBulk(@Body() request: addQuestionsDto[]) {
    try {
      return await this.questionsService.addQuestionsBulk(request);
    } catch (e) {
      return { isSuccess: false, message: e?.message || JSON.stringify(e) };
    }
  }

  @Put('/update')
  async updateGroups(
    @Query('questionId') questionId: string,
    @Body() request: updateQuestionsDto,
  ) {
    try {
      return await this.questionsService.updateQuestionById(request,questionId);
    } catch (e) {
      return { isSuccess: false, message: e?.message || JSON.stringify(e) };
    }
  }

  @Delete()
  async deleteGroups(@Query('questionId') questionId:string) {
    try {
        return await this.questionsService.deleteQuestion(questionId);
      } catch (e) {
        return Error(e);
      }
  }
}
