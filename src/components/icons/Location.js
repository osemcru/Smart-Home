import React from 'react';

const Location = props => {
  const { primary, secondary, width, height } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.23926 10.3913C4.25367 6.15071 7.70302 2.72471 11.9436 2.73912C16.1842 2.75353 19.6102 6.20288 19.5958 10.4435V10.5304C19.5436 13.2869 18.0045 15.8348 16.1175 17.8261C15.0384 18.9467 13.8333 19.9388 12.5262 20.7826C12.1767 21.0849 11.6583 21.0849 11.3088 20.7826C9.36033 19.5143 7.65019 17.9131 6.25665 16.0522C5.01461 14.4294 4.30942 12.4597 4.23926 10.4174L4.23926 10.3913Z"
        stroke={primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        opacity="0.4"
        cx="11.9179"
        cy="10.5391"
        r="2.46087"
        stroke={secondary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Location.defaultProps = {
  primary: '#200E32',
  secondary: '#200E32',
  width: 40,
  height: 40,
};

export default Location;
