const routes = [
    {
        method:'POST',
        path:'/notes',
        handler:(request,h)=>{
            if(request.headers['Content-Type']=='application/json'){
                const body = request.body
                
            }
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
];
 
module.exports = routes;