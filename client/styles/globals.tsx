import { createGlobalStyle, css } from 'styled-components';

const basicStyles = css`
  /* -------------------------------- */
  /* BASE                             */
  /* -------------------------------- */

  /*!Theme Name:
Theme URI: https://.netlify.app/
Repository: https://github.com/princemuel/kanban-task-manager
Description: An Audiophile E-Conmmerce Project from Frontend Mentor Challeges
Author's Name: Samuel Chukwuzube
Author's Moniker: princemuel
Version: 01
*/

  /* ////////////////////////////////////////////
// BASE CONFIGURATION
*/
  :root {
    /* colors */
    --clr-700: 0 0% 0%;
    --clr-600: 0 0% 6%;
    --clr-500: 22 65% 57%;
    --clr-400: 21 94% 75%;
    --clr-300: 0 0% 95%;
    --clr-200: 0 0% 98%;
    --clr-100: 0 0% 100%;
  }

  /* Set core root defaults */
  html {
    box-sizing: border-box;
    font-size: 50%;
    text-rendering: optimizeSpeed;

    @media (min-width: 45em) {
      font-size: 56.25%;
    }
    @media (min-width: 75em) {
      font-size: 62.5%;
    }
    @media (min-width: 112.5em) {
      font-size: 75%;
    }

    &,
    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    font: inherit;
    box-sizing: inherit;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
  }

  /*********** SCROLLBARS: DISABLED ************/
  *,
  html {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
    }
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    text-decoration: none;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* TYPOGRAPHY */
  body {
    /* Levels of white */
    --clr-neutral-100: hsl(var(--clr-100));
    --clr-neutral-200: hsl(var(--clr-200));
    --clr-neutral-300: hsl(var(--clr-300));

    /* Levels of brown */
    --clr-primary-100: hsl(var(--clr-500));
    --clr-primary-200: hsl(var(--clr-400));

    /* Levels of dark */
    --clr-accent-100: hsl(var(--clr-700));
    --clr-accent-200: hsl(var(--clr-600));

    color: var(--clr-accent-100);
    background: var(--clr-neutral-100);
    font-family: var(--ff-body);
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-body);
  }

  /* FLOW UTILITY */
  :where(.flow :not(:first-child)) {
    margin-block-start: var(--flow-space, 1.6rem);
  }
  .flow-space--small {
    --flow-space: 1rem;
  }

  .skip-to-content {
    position: absolute;
    margin-inline: auto;
    padding: 0.5em 1em;
    color: var(--clr-accent-100);
    background: var(--clr-neutral-200);
    clip-path: none;
    z-index: 9999;
    transform: translateY(-120%);
    transition: transform 500ms ease-in-out;

    &:focus {
      outline: 2px solid var(--clr-primary-100);
      transform: translateY(0);
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${basicStyles}
`;

export { GlobalStyle };
