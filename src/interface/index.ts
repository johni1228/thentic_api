export interface Contract {
  'request_id': string,
  'status': string,
  'transaction_pixel': string,
  'transaction_url': string
}

export const ThenticAPI = {
  createNFTContract: 'https://thentic.tech/api/nfts/contract',
  mintNFT: 'https://thentic.tech/api/nfts/mint',
  transferNFT: 'https://thentic.tech/api/nfts/transfer',
  showContract: 'https://thentic.tech/api/contracts',
  showNFTs: 'https://thentic.tech/api/nfts'
}