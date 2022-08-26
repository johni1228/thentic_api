import { Body, Controller, Get, Post, Put, Request, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags, ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ApiImplicitParam } from '@nestjs/swagger/dist/decorators/api-implicit-param.decorator';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios';
import { lastValueFrom, map, Observable } from 'rxjs';

import { ContractService } from './contract.service'
import { ContractDto, ShowContractDto } from './dto/contract.dto'
import { Contract, ThenticAPI, ShowContractInterface } from '../interface'

@ApiTags('Contract')
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
      console.log('Api result = ', res);
      return res;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

}
