import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'
import ReviewMessage from './pages/ReviewMessage/ReviewMessage'
import News from './pages/News/News'

function App() {
  return (
    <Switch>
      <Route exact path="/news" component={News} />
      <Route exact path="/review-message" component={ReviewMessage} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/" component={Home} />
      <Route />
    </Switch>
  )
}

export default App
