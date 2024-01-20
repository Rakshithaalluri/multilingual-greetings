import './index.css'

const Languages = props => {
  const {languageDetails, onChangeLanguage, isActive} = props
  const {buttonText, id} = languageDetails

  const onClickLanguage = () => {
    onChangeLanguage(id)
  }

  const activeButton = isActive ? 'active-tab-btn' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`buttons ${activeButton}`}
        onClick={onClickLanguage}
      >
        {' '}
        {buttonText}{' '}
      </button>
    </li>
  )
}

export default Languages
