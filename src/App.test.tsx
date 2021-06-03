import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("should render an input",()=>{
  render(<App/>);
  const input = screen.getByLabelText('name');
  expect(input).toBeInTheDocument();
});
test("should call the onSubmit",()=>{
  
  const onSubmit = jest.fn();
  render(<App onSubmit={onSubmit}/>);

  const input = screen.getByLabelText('name');
  fireEvent.change(input,{target:{value:"mangla"}});

  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(onSubmit).toBeCalledTimes(1);

});