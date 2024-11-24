import Sidebar from './sidebar/components/sidebar';
import MemberPage from './pages/components/memberPage';

const router = [
    {
        path: '/dashboard',
        element: <Sidebar />, /* This has to be changed and used <Dashboard>*/
        children: [
            {
                path: 'members',
                element: <MemberPage />
            }
        ]
    }
]

export default router;