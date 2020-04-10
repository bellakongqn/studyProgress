1. npx create-react-app router-training --template typescript
2. npm i react-router-dom @types/react-router-dom 
3. <Route  path="/"  component={Home}/>  
    A route with path="/" will *always* match
    the URL because all URLs begin with a /. So that's
    why we put this one last of all ----添加exact 解决
4. Redirect auth
```
    const AuthRoute = (props: RouteProps) => {
        const token = useMemo(() => localStorage.getItem('token'), [])
        if(!token) {
            return <Redirect to="/login" />
        } else {
            return <Route {...props} />
        }
    }
```
5. NavLink 比 Link  多了一些 activeClassName activeStyle 即选中时的样式

6. Custom Link

7. sideBar

