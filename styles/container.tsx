import styled from 'styled-components';

export const GlobalWrap = styled.div`
  --max-width: 126.6rem;
  --container-padding: 1.6rem;

  width: min(var(--max-width), 100% - (var(--container-padding) * 2));
  margin-inline: auto;
  /* padding-inline: var(--spacer, 1em); */
`;
