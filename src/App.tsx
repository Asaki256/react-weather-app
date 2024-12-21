import { useState } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import Results from './components/Results'

type ResultState = {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

const App = () => {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultState>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`http://api.weatherapi.com/v1/current.json?key=fa849fbe1af6436ba7255502240903&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
        setCity("")
      }).catch(() => alert("エラーが発生しました。ページをリロードして、もう一度入力してください、"))
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        <Results results={results} />
      </div>
    </div>
  )
}
export default App