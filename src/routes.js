import Login from './components/Login'
import Dashboard from './components/Dashboard'
import MainContainer from './components/MainContainer'
import User from "./components/User";
import Form from "./components/Form";

export default [
    {
        path: '/',
        component: Login
    },
    {
        path: '/home',
        // You could also have named views at the top
        name: 'home',
        component: MainContainer,
        props: {
            source: {
            }
        },
        meta: {
            withAuth: true,
        },
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                components: {
                    default: MainContainer,
                    dash: Dashboard
                },
                props: {
                    source: {
                    }
                },
                meta: {
                },
            },
            {
                path: '/user',
                name: 'user',
                components: {
                    default: MainContainer,
                    dash: User
                },
                props: {
                    source: {
                    }
                },
                meta: {
                },
            },
            {
                path: '/form',
                name: 'form',
                components: {
                    default: MainContainer,
                    dash: Form
                },
                props: {
                    source: {
                    }
                },
                meta: {
                },
            },
        ]
    }
]