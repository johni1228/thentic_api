export interface Contract {
  'chain_id': string,
  'contract': string,
  'name': string,
  'short_name': string,
  'request_id': string,
  'status': string,
  'transaction_pixel': string,
  'transaction_url': string
}

export interface ShowContractInterface {
  'key': string,
  'chain_id': Number
}

export const ThenticAPI = {
  createNFTContract: 'https://thentic.tech/api/nfts/contract',
  mintNFT: 'https://thentic.tech/api/nfts/mint',
  transferNFT: 'https://thentic.tech/api/nfts/transfer',
  showContract: 'https://thentic.tech/api/contracts',
  showNFTs: 'https://thentic.tech/api/nfts'
}