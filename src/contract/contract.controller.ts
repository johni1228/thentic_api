import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios';
import { lastValueFrom, map } from 'rxjs';

import { ContractDto, ShowContractDto } from './dto/contract.dto'
import { Contract, ThenticAPI } from '../interface'

@ApiTags('Contract')
@Controller('contract')
export class ContractController {
  constructor(private readonly httpService: HttpService) { }

  @Post('create')
  @ApiCreatedResponse()
  async createContract(@Body() body: ContractDto): Promise<AxiosResponse<Contract, any>> {

    try {
      const res = await lastValueFrom(this.httpService
        .post(ThenticAPI.createNFTContract, body, null)
        .pipe(map((resp: any) => resp.data))
      );
      return res;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  @Get('showContracts')
  @ApiOkResponse()
  async showContracts(@Query() params: ShowContractDto): Promise<AxiosResponse<any, any>> {
    try {
      const res = await lastValueFrom(this.httpService
        .get(ThenticAPI.showContract, {
          params,
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .pipe(map((resp: any) => resp.data))
      );
      return res;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

}
