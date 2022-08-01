import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  width: 100%;
  margin-top: ${props => props.theme.spacing.step * 2}px;
`;
export const ContactsItem = styled.li`
  position: relative;
  background-color: ${props => props.theme.colors.dark};
`;
