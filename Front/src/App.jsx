import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import GlobalStyles from './styles/GlobalStyles';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
}
