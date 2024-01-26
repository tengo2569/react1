

import './App.css'
import Card from './componnents/card'
import Send from './componnents/send'

function card() {


  return (
    <>
      <Card  number={12}  date='1 month ago' img="girl.svg" name='amyrobson' text='Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.'/> 
      <Card  number={5} date='2 weeks ago' img="boy1.svg" name='maxblagun' text='Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!'/>  
      <Card  number={4}  date='1 week ago' img="boy2.svg" name='ramsesmiron' text='@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.'/>  
      <Card  number={8} date='2 days ago' img="boy3.svg" name='juliusomo' text='@ramsesmiron I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.'/>  
      <Send />



    </>
  )
}

export default card
