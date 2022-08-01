import styled from '@emotion/styled';

export const ContactsText = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.white};
  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  padding: ${props => props.theme.spacing.step}px;
`;
export const Tel = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  margin-left: ${props => props.theme.spacing.step}px;
  color: ${props => props.theme.colors.light};
`;
export const ButtonDelete = styled.button`
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.primary};
  margin-left: ${props => props.theme.spacing.step}px;
  padding: ${props => props.theme.spacing.step}px;
  border-radius: ${props => props.theme.spacing.step * 2}px;
  right: ${props => props.theme.spacing.step}px;
  position: absolute;
  cursor: pointer;
  border: none;
  transition: background-color 250ms linear;
  :hover {
    color: ${props => props.theme.colors.dark};
    background-color: bisque;
  }
`;
