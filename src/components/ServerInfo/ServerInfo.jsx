import './ServerInfo.scss'

export const ServerInfo = ({ info, color }) => {
  const { name, current, max } = info

  const percentage = Math.floor((current / max) * 100)

  return (
    <div className="server-info-container">
      <div
        className="online-bar-container"
        style={{ marginLeft: percentage - 12 + '%' }}
      >
        <div className="online-bar-rect" style={{ backgroundColor: color }}>
          {current + '%'}
        </div>
        <div
          className="online-bar-triangle"
          style={{ borderTopColor: color }}
        ></div>
      </div>

      <div className="online-background">
        <div
          className="online-current"
          style={{ backgroundColor: color, width: percentage + '%' }}
        >
          <div className="online-dot" style={{ backgroundColor: color }}></div>
        </div>
      </div>

      <div className="server-name" style={{ color: color }}>
        {name}
      </div>
    </div>
  )
}
