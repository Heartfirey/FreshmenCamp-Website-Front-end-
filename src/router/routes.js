const routes = [
    {
        name: 'main',
        path: '/main',
        component: () => import('@/views/MainPage.vue')
    },
    {
        name: 'course',
        path: '/course',
        component: () => import('@/views/CoursePage.vue')
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('@/views/RegisterPage.vue')

    },
    {
        name: 'tools',
        path: '/tools',
        component: () => import('@/views/ToolsPage.vue')

    },
    {
        name: 'default',
        path: '/',
        redirect: "main"
    },
    
];

export default routes
