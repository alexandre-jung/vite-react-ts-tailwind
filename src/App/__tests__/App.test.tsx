import '@testing-library/jest-dom';
// import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '..';

import { render } from '@testing-library/react';

describe('App unit test', () => {
  it('should render', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  // it('should fetch users', async () => {
  //   const { container } = render(<App />);

  //   await screen.findByText('alex');
  //   console.log(container.innerHTML);
  // });
});
