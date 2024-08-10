import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Questions } from './entity/questions.entity';
import { GroupService } from '../group/group.service';
import { addQuestionsDto, updateQuestionsDto } from './dto/questions.dto';
import { ProductService } from '../product/product.service';

@Injectable()
export class QuestionsService {
  constructor(
    @Inject('QUESTIONS_REPOSITORY')
    private QuestionsRepository: Repository<Questions>,
    private groupService: GroupService,
    private productService: ProductService,
  ) {}

  async getQuestionsById(questionId: string) {
    try {
      const question = await this.QuestionsRepository.findOne({
        where: { id: questionId },
      });

      return question;
    } catch (e) {
      throw Error(e);
    }
  }

  async getQuestionsOnGroup(groupId: string) {
    try {
      const grp = await this.groupService.getGroups(groupId);
      const questions = await this.QuestionsRepository.find({
        where: { groupId: grp },
      });

      return questions;
    } catch (e) {
      throw Error(e);
    }
  }

  async getQuestionsOnProduct(productId: string) {
    try {
      const grp = await this.groupService.getGroupsByProductId(productId);

      const questions = await this.QuestionsRepository.find({
        where: { groupId: grp },
      });

      return questions;
    } catch (e) {
      throw Error(e);
    }
  }

  async addQuestions(request: addQuestionsDto) {
    try {
      const question = new Questions();
      Object.assign(question, request);
      question.isActive = true;
      await this.QuestionsRepository.save(question);

      return question;
    } catch (e) {
      throw Error(e);
    }
  }

  async addQuestionsBulk(requests: addQuestionsDto[]) {
    try {
      let rep: Questions[] = [];
      for (const request of requests) {
        const question = new Questions();
        Object.assign(question, request);
        question.isActive = true;
        await this.QuestionsRepository.save(question);
        rep.push(await this.QuestionsRepository.save(question));
      }

      return rep;
    } catch (e) {
      throw Error(e);
    }
  }

  async updateQuestionById(request: updateQuestionsDto, Questionid: string) {
    try {
      // const GroupToUpdate = await this.GroupRepository.findOne({where:{id:GroupId}})

      this.QuestionsRepository.update({ id: Questionid }, request);
    } catch (e) {
      throw Error(e);
    }
  }

  async deleteQuestion(questionId: string) {
    try {
      const QuestionToDelete = await this.QuestionsRepository.findOne({
        where: { id: questionId },
      });

      QuestionToDelete.isActive = false;

      return await this.QuestionsRepository.update(
        { id: questionId },
        QuestionToDelete,
      );
    } catch (e) {
      throw Error(e);
    }
  }
}
