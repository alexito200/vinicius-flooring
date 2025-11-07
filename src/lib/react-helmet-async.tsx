import { Children, isValidElement, ReactNode, useEffect } from 'react';

type HelmetProviderProps = {
  children: ReactNode;
};

type HelmetProps = {
  children?: ReactNode;
};

type HelmetElementProps = {
  children?: ReactNode;
  dangerouslySetInnerHTML?: { __html?: string };
  [key: string]: unknown;
};

const HELMET_ATTRIBUTE = 'data-helmet-managed';

function toTextContent(content: ReactNode): string {
  if (typeof content === 'string') {
    return content;
  }

  if (Array.isArray(content)) {
    return content.map((item) => (typeof item === 'string' ? item : '')).join('');
  }

  return '';
}

export function HelmetProvider({ children }: HelmetProviderProps) {
  return <>{children}</>;
}

export function Helmet({ children }: HelmetProps) {
  useEffect(() => {
    const createdNodes: HTMLElement[] = [];
    const previousTitle = document.title;

    Children.forEach(children, (child) => {
      if (!isValidElement<HelmetElementProps>(child)) {
        return;
      }

      const elementType = typeof child.type === 'string' ? child.type : null;

      if (!elementType) {
        return;
      }

      if (elementType === 'title') {
        const text = toTextContent(child.props.children);
        if (text) {
          document.title = text;
        }
        return;
      }

      const domNode = document.createElement(elementType);
      domNode.setAttribute(HELMET_ATTRIBUTE, 'true');

      const { props } = child;

      Object.entries(props).forEach(([propKey, propValue]) => {
        if (propKey === 'children' || propKey === 'dangerouslySetInnerHTML') {
          return;
        }

        if (propValue === undefined || propValue === null) {
          return;
        }

        domNode.setAttribute(propKey, String(propValue));
      });

      if (elementType === 'script') {
        const innerHTML = props.dangerouslySetInnerHTML?.__html;
        if (innerHTML) {
          domNode.textContent = innerHTML;
        } else {
          domNode.textContent = toTextContent(child.props.children);
        }
      }

      document.head.appendChild(domNode);
      createdNodes.push(domNode);
    });

    return () => {
      createdNodes.forEach((node) => {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      });

      document.title = previousTitle;
    };
  }, [children]);

  return null;
}

export default Helmet;
