import { css } from 'styled-components';

export const theme = {
  mainColor: '#3498db',
  dangerColor: '#e74c3c',
  successColor: '#2ecc71',
};

const sizes = {
  mobile: 768,
};

export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${sizes[label]}px) {
          ${css(literals, ...placeholders)};
        }
      `.join('');
    return acc;
  },
  {} as Record<
    keyof typeof sizes,
    (l: TemplateStringsArray, ...p: any[]) => string
  >,
);
