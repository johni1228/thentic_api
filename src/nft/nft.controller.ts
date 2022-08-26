import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AxiosResponse } from 'axios';
import { lastValueFrom, map } from 'rxjs';

import { ShowContractDto } from 'src/contract/dto/contract.dto';
import { ThenticAPI } from 'src/interface';
import { MintNFT, TransferNFT } from './dto/nft.dto';

@ApiTags('NFT')
@Controller('nfts')
export class NftController {
  constructor(private readonly httpService: HttpService) { };
  @Get()
  @ApiOkResponse()
  async getAll(@Query() query: ShowContractDto): Promise<AxiosResponse<any, any>> {
    try {
      const res = await lastValueFrom(this.httpService
        .get(ThenticAPI.showNFTs, { params: query })
        .pipe(map((res: any) => res.data))
      );
      return res;
    } catch (error) {
      console.log(error)
    }
    return null;

  }

  @Post('mint')
  @ApiOkResponse()
  async mintNFT(@Body() payload: MintNFT): Promise<AxiosResponse<any, any>> {
    try {
      const res = lastValueFrom(this.httpService
        .post(ThenticAPI.mintNFT, payload, null)
        .pipe(map((res: any) => res.data))
      );
      return res;
    } catch (error) {
      console.log(error)
    }
    return null;
  }

  @Post('transfer')
  @ApiOkResponse()
  async transferNFT(@Body() payload: TransferNFT): Promise<AxiosResponse<any, any>> {
    try {
      const res = lastValueFrom(this.httpService
        .post(ThenticAPI.transferNFT, payload, null)
        .pipe(map((res: any) => res.data))
      );
      return res;
    } catch (error) {
      console.log(error)
    }
    return null;
  }
}
