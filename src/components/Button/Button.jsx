import './Button.scss'

export const Button = ({ link, str }) => {
  return (
    <div className="yellow-button-container">
      <a href={link} className="yellow-button">
        {str}
      </a>
    </div>
  )
}
