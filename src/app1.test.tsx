import { render, screen } from "@testing-library/react";
import App from './App';
import user from "@testing-library/user-event";
test("should call the onSubmit2 after re render",()=>{
    const onSubmit1 = jest.fn();
    const {rerender} = render(<App onSubmit={onSubmit1} />);
    const input = screen.getByLabelText("name");

    user.type(input,"Rajat");

    const onSubmit2 = jest.fn();
    rerender(<App onSubmit={onSubmit2}/>);

    const button = screen.getByRole("button");
    
    user.click(button);
    
    expect(onSubmit1).toBeCalledTimes(0);
    expect(onSubmit2).toBeCalledTimes(1);

})