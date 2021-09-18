import { View } from 'react-native'
import styled from 'styled-components'
export const Wrapper = styled(View)`
  padding: 30px;
`;

export const ButtonRow = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;
export const ButtonCol = styled(View)`
    flex: 0 0 50%;
    max-width: 50%;
    padding: 15px;
`;