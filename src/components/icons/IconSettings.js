import React from 'react';

import themes from '@styles/themes';

const theme = themes('white');

const IconSettings = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5825 9.74807V0.562149C10.5825 0.249844 10.3327 0 10.0204 0C9.70805 0 9.4582 0.249844 9.4582 0.562149V9.74807C8.15485 10.0104 7.16797 11.1639 7.16797 12.5463C7.16797 13.9288 8.15485 15.0822 9.4582 15.3446V19.4337C9.4582 19.746 9.70805 19.9958 10.0204 19.9958C10.3327 19.9958 10.5825 19.746 10.5825 19.4337V15.3446C11.8859 15.0822 12.8727 13.9288 12.8727 12.5463C12.8727 11.168 11.89 10.0104 10.5825 9.74807ZM10.0204 14.2744C9.06678 14.2744 8.29227 13.4999 8.29227 12.5463C8.29227 11.5928 9.06678 10.8182 10.0204 10.8182C10.9739 10.8182 11.7484 11.5928 11.7484 12.5463C11.7484 13.4999 10.9739 14.2744 10.0204 14.2744Z"
        fill={theme.grey.alternative.dark}
      />
      <path
        d="M3.69969 5.03435V0.562149C3.69969 0.249844 3.44984 0 3.13754 0C2.82524 0 2.57539 0.249844 2.57539 0.562149V5.03435C1.27204 5.29669 0.285156 6.45014 0.285156 7.83261C0.285156 9.21507 1.27204 10.3685 2.57539 10.6309V19.4337C2.57539 19.746 2.82524 19.9958 3.13754 19.9958C3.44984 19.9958 3.69969 19.746 3.69969 19.4337V10.6267C5.00304 10.3644 5.98992 9.21091 5.98992 7.82844C5.98992 6.44597 5.00304 5.29669 3.69969 5.03435ZM3.13754 9.56069C2.18397 9.56069 1.40945 8.78618 1.40945 7.83261C1.40945 6.87903 2.18397 6.10452 3.13754 6.10452C4.09111 6.10452 4.86563 6.87903 4.86563 7.83261C4.86563 8.78618 4.08695 9.56069 3.13754 9.56069Z"
        fill={theme.grey.alternative.dark}
      />
      <path
        d="M17.4243 5.03435V0.562149C17.4243 0.249844 17.1745 0 16.8621 0C16.5498 0 16.3 0.249844 16.3 0.562149V5.03435C14.9966 5.29669 14.0098 6.45014 14.0098 7.83261C14.0098 9.21507 14.9966 10.3685 16.3 10.6309V19.4379C16.3 19.7502 16.5498 20 16.8621 20C17.1745 20 17.4243 19.7502 17.4243 19.4379V10.6267C18.7276 10.3644 19.7145 9.21091 19.7145 7.82844C19.7145 6.44597 18.7318 5.29669 17.4243 5.03435ZM16.8621 9.56069C15.9086 9.56069 15.1341 8.78618 15.1341 7.83261C15.1341 6.87903 15.9086 6.10452 16.8621 6.10452C17.8157 6.10452 18.5902 6.87903 18.5902 7.83261C18.5902 8.78618 17.8157 9.56069 16.8621 9.56069Z"
        fill={theme.grey.alternative.dark}
      />
    </svg>
  );
};

IconSettings.defaultProps = {
  fill: theme.primary,
};

export default IconSettings;