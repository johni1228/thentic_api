import { Body, Controller, Get, Post, Put, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags, ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios';
import { lastValueFrom, map, Observable } from 'rxjs';

import { ContractService } from './contract.service'
import { ContractDto } from './dto/contract.dto'
import { Contract, ThenticAPI } from '../interface'



@ApiTags('Category')
@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService, private readonly httpService: HttpService) { }

  @Post('create')
  @ApiCreatedResponse()
  async createContract(@Body() body: ContractDto): Promise<AxiosResponse<Contract, any>> {

    try {
      const res = await lastValueFrom(this.httpService
        .post(ThenticAPI.createNFTContract, body, null)
        .pipe(map((resp: any) => resp.data))
      );
      console.log('api result = ', res);
      return res;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

}
