const { resolve } = require('path');

module.exports = {
  '@application': resolve(__dirname, 'src', 'application'),
  '@atom': resolve(__dirname, 'src', 'atoms'),
  '@component': resolve(__dirname, 'src', 'components'),
  '@enum': resolve(__dirname, 'src', 'enums'),
  '@page': resolve(__dirname, 'src', 'pages'),
  '@style': resolve(__dirname, 'src', 'styles'),
  '@type': resolve(__dirname, 'src', 'types'),
  '@util': resolve(__dirname, 'src', 'utils'),
  '@mui/styled-engine': '@mui/styled-engine-sc'
};
