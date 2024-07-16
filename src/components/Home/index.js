import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Heading, Button} from '../Style.js'
import './index.css'

class Home extends Component {
  state = {content: '', isOne: false, isTwo: false, isThree: false}

  typing = event => {
    this.setState({
      content: event.target.value,
    })
  }

  once = () => {
    this.setState(prevState => {
      return {isOne: !prevState.isOne}
    })
  }

  twice = () => {
    this.setState(prevState => {
      return {isTwo: !prevState.isTwo}
    })
  }

  thrice = () => {
    this.setState(prevState => {
      return {isThree: !prevState.isThree}
    })
  }

  render() {
    const {isOne, isTwo, isThree, content} = this.state
    return (
      <div className="home">
        <div className="sub-home">
          <div className="one">
            <Heading>Text Editor</Heading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="home-banner"
            />
          </div>
          <div className="two">
            <div>
              <ul className="sub-two">
                <li>
                  <Button
                    data-testid="bold"
                    onClick={this.once}
                    color={isOne ? '#faff00' : '#f1f5f9'}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>
                <li>
                  <Button
                    data-testid="italic"
                    onClick={this.twice}
                    color={isOne ? '#faff00' : '#f1f5f9'}
                  >
                    <GoItalic size={25} />
                  </Button>
                </li>
                <li>
                  <Button
                    data-testid="underline"
                    onClick={this.thrice}
                    color={isOne ? '#faff00' : '#f1f5f9'}
                  >
                    <AiOutlineUnderline size={25} />
                  </Button>
                </li>
              </ul>
            </div>
            <textarea
              onChange={this.typing}
              cols="47"
              rows="35"
              className="input-style"
              style={{
                fontWeight: isOne ? 'bold' : 'normal',
                fontStyle: isTwo ? 'italic' : 'normal',
                textDecoration: isThree ? 'underline' : 'normal',
              }}
            >
              {content}
            </textarea>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
