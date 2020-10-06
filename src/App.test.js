import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('Correct placement of header component', () => {
    const { container } = render(<App/>);
    expect(container.firstChild).toHaveClass('header-container');
});

test('Correct placement of TodosApp container', () => {
    const { container } = render(<App/>);
    expect(container.childNodes[1]).toHaveClass('TodosApp');
});
