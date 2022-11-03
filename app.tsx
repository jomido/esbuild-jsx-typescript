import leData from './data/default.json'
import { render } from 'preact'

const fetchData = async (filename: string) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  return await fetch(`/data/${filename}.json`, { headers })
}

fetchData('default').then((data) => {
  console.log(data)
  console.log(leData)
  data.json().then((d) => {
    console.log(d)
    console.log(<div />)
    return <div />
  })
})

const App = () => {
  return (
    <>
      <div>
        hello world
        <div>
          hello world
          <div>
            hello world<div>hello world</div>
          </div>
        </div>
      </div>
    </>
  )
}

render(<App />, document.getElementById('root'))
