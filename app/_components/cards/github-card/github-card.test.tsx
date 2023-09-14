import { render } from '@testing-library/react';
import { GithubCard } from './github-card';

const props = {
  href: 'https://www.not-real.com',
  label: 'label',
  subLabel: 'subLabel',
  icon: <div></div>,
};

describe('<GithubCard />', () => {
  it('Should render with no errors', () => {
    render(<GithubCard {...props} />);
  });
});
