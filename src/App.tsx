const App = () => {
  return (
    <div>
      <h1 className="test">こんにちは</h1>
      <h3>さようなら</h3>
      {false?(<p>True!</p>):(<p>False!</p>)}
    </div>
  )
}
export default App