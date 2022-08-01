import styled from '@emotion/styled';

export const FormName = styled.form`
  background-color: ${props => props.theme.colors.dark};
  width: 100%;
`;
export const InputName = styled.input`
  background-color: #e8e3e3;
  padding: ${props => props.theme.spacing.step}px;
  width: 100%;
  border: solid 2px black;
  margin-top: ${props => props.theme.spacing.step * 4}px;
  margin-bottom: ${props => props.theme.spacing.step * 4}px;
`;
export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.medium};
  color: yellowgreen;
  transform: translateX();
`;

export const Button = styled.button`
  font-size: ${props => props.theme.fontSizes.small};
  padding-top: ${props => props.theme.spacing.step}px;
  padding-bottom: ${props => props.theme.spacing.step}px;
  padding-left: ${props => props.theme.spacing.step * 2}px;
  padding-right: ${props => props.theme.spacing.step * 2}px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-bottom: ${props => props.theme.spacing.step * 2}px;
  border-radius: ${props => props.theme.spacing.step}px;
  cursor: pointer;
  transition: background-color 250ms linear;

  :hover {
    color: ${props => props.theme.colors.dark};
    background-color: bisque;
  }
`;
