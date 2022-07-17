// more like a scratch pad of ideas right now
export default class Router {
    
}

type UrlRouteType = {
    template: String;
    title: String;
    description: String;
  }
  const urlRoutes = {
    '404': {
      template: 'templates/404.html',
      title: '',
      description: ''
    },
    '/': {
      template: 'templates/404.html',
      title: '',
      description: ''
      
    },
  '/about': {
      template: 'templates/404.html',
      title: '',
      description: ''
    }
  }
  
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLAnchorElement;
    if (!target.matches('nav-link')) {
      return;
    }
    e.preventDefault();
    urlRoute(e);
  })
  
  const urlRoute = (event: Event) => {
    event = event || window.event;
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    window.history.pushState({}, '',target?.href);
    urlLocationHandler();
  }
  
  const urlLocationHandler = async () => {
    let location: String = window.location.pathname;
  
    if (location.length === 0) {
      location = '/';
    }
  
    const route: UrlRouteType = urlRoutes[location as keyof typeof urlRoutes] || urlRoutes['404'];
    const html = await fetch(route.template as RequestInfo).then((res) => res.text())
    console.log(html)
  }
