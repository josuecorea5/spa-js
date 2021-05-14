const resolveRoutes = (route) => {
  if(route.length <= 3) {
    let valueRoute = route === '/' ? route : '/:id'; 
    return valueRoute;
  }
  return `/${route}`;
}

export default resolveRoutes;