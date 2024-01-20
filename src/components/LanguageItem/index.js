import './index.css'

const LanguageItem = props => {
  const {LanguageDetails} = props
  const {imageUrl, imageAltText} = LanguageDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={imageAltText} className="language-image" />
    </li>
  )
}

export default LanguageItem
