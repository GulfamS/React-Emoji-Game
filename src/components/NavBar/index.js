import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="title-with-score">
        <div className="logo-and-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo-img"
            alt="emoji logo"
          />
          <h1 className="nav-heading">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-card">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
