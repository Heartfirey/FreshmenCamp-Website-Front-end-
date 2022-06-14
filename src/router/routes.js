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
        name: 'default',
        path: '/',
        redirect: "main"
    },
    
];

export default routes
