import Login from './components/login';
import Signup from './components/signup';

const router = [
    {
        path: '/sign-up',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default router;