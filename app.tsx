import leData from './data/default.json'

const fetchData = async (filename: string) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  return await fetch(`/data/${filename}.json`, { headers })
}

console.log('huh')

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
      <div>hello world</div>
    </>
  );
};

import { render } from 'preact';

render(<App />, document.getElementById('root'));
