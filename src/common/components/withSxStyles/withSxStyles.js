import { forwardRef } from 'react';
import merge from 'lodash/merge';

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `styles` property.
const withSxStyles = (stylesOrCreator, options = {}) => Component => {
  if (process.env.NODE_ENV !== 'production') {
    if (Component === undefined) {
      throw new Error(
        [
          'You are calling withSxStyles(styles)(Component) with an undefined component.',
          'You may have forgotten to import it.'
        ].join('\n')
      );
    }
  }

  const WithSxStyles = forwardRef(function WithSxStyles(props, ref) {
    const { styles: stylesProp = {}, ...restProps } = props;

    const styles = merge({}, stylesOrCreator, stylesProp);

    return <Component ref={ref} styles={styles} {...restProps} />;
  });

  WithSxStyles.displayName = `WithSxStyles(${options.name || Component.displayName || Component.name})`;

  return WithSxStyles;
};

export default withSxStyles;
