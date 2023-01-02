declare type $ElementProps<T> = T extends React.ComponentType<infer Props>
  ? Props extends object
    ? Props
    : never
  : never;

// Usage
// import { CSSProperties } from 'react';
// const Box = (props: CSSProperties) => <div style={props} />;

// const Card = (
//   { title, children, ...props }: { title: string } & $ElementProps<typeof Box> // new utility, see below
// ) => (
//   <Box {...props}>
//     {title}: {children}
//   </Box>
// );
