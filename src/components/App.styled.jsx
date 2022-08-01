import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${props => props.theme.spacing.step * 5}px;
  padding-bottom: ${props => props.theme.spacing.step * 5}px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding-top: ${props => props.theme.spacing.step * 10}px;
    padding-bottom: ${props => props.theme.spacing.step * 10}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding-top: ${props => props.theme.spacing.step * 20}px;
    padding-bottom: ${props => props.theme.spacing.step * 20}px;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: ${props => props.theme.spacing.step * 5}px;
  padding-right: ${props => props.theme.spacing.step * 5}px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
`;

export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${props => props.theme.spacing.step * 5}px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.medium};

    margin-bottom: ${props => props.theme.spacing.step * 7}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.large};

    margin-bottom: ${props => props.theme.spacing.step * 10}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    margin-bottom: ${props => props.theme.spacing.step * 20}px;
  }
`;
