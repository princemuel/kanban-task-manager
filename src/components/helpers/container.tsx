import * as React from 'react';
import { tv } from 'tailwind-variants';

const container = tv({
  base: '',
  slots: {
    base: '',
    outerChild: 'mx-auto w-full max-w-screen-2xl lg:px-8',
    outerWrapper: 'sm:px-8',
    innerChild: 'mx-auto max-w-screen-md 3xl:max-w-screen-lg',
    innerWrapper: 'relative px-4 md:px-8 lg:px-12',
  },
});

const { outerChild, outerWrapper, innerChild, innerWrapper } = container();

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Outer = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...restProps }, forwardedRef) => {
    return (
      <div {...restProps} className={outerWrapper()} ref={forwardedRef}>
        <div className={outerChild({ className })}>{children}</div>
      </div>
    );
  }
);
Outer.displayName = 'OuterContainer';

const Inner = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...restProps }, forwardedRef) => {
    return (
      <div {...restProps} ref={forwardedRef} className={innerWrapper()}>
        <div className={innerChild({ className })}>{children}</div>
      </div>
    );
  }
);
Inner.displayName = 'InnerContainer';

const Wrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...restProps }, forwardedRef) => {
    return (
      <Outer ref={forwardedRef} {...restProps}>
        <Inner>{children}</Inner>
      </Outer>
    );
  }
);
Wrapper.displayName = 'Container';

export const Container = Object.assign({}, Wrapper, {
  Inner: Inner,
  Outer: Outer,
});
