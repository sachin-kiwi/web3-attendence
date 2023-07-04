import chains from './chains';

export const ERRORS = {
  INTERNAL_ERROR: 'Something went wrong.Please check with admin.'
};

export const createChain = (data) => {
  const chain = chains.filter((x) => x.chainId === data.chainId);
  if (chain.length === 0) {
    return [];
  }
  return chain.map((x) => {
    return {
      id: x.chainId,
      shortName: x.shortName,
      name: x.name,
      network: '',
      nativeCurrency: x.nativeCurrency,
      rpcUrls: {
        default: {
          http: [data.rpcUrl]
        },
        public: {
          http: [data.rpcUrl]
        }
      },
      blockExplorers: {
        default: {
          name: '',
          url: data.explorerUrl
        }
      },
      testnet: !data.isMainnet
    };
  });
};

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ISMAINNET = process.env.NEXT_IS_MAINNET || false;
