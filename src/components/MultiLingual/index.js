import {Component} from 'react'
import Languages from '../Languages'

import './index.css'
import LanguageItem from '../LanguageItem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiLingual extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  onChangeLanguage = id => {
    this.setState({activeId: id})
  }

  getFilteredItems = () => {
    const {activeId} = this.state
    const filteredProjects = languageGreetingsList.filter(
      each => each.id === activeId,
    )
    return filteredProjects
  }

  render() {
    const {activeId} = this.state
    const filteredProjects = this.getFilteredItems()

    return (
      <div className="bg-container">
        <h1 className="heading"> Multilingual Greetings </h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(each => (
            <Languages
              languageDetails={each}
              key={each.id}
              onChangeLanguage={this.onChangeLanguage}
              isActive={activeId === each.id}
            />
          ))}
        </ul>
        {filteredProjects.map(eachItem => (
          <LanguageItem LanguageDetails={eachItem} key={eachItem.id} />
        ))}
      </div>
    )
  }
}

export default MultiLingual
