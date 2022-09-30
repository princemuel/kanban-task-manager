import styled from 'styled-components';

interface ButtonProps {}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  border: none;
  border-radius: var(--b-radius);
  outline: none;
  font: inherit;
  letter-spacing: var(--spacing);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: var(--transition, all 0.2s ease);

  &:hover,
  &:focus-visible {
    outline: none;
  }
`;
