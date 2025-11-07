import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props} />
));

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
