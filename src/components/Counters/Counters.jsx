import './Counters.scss'

export const Counters = () => {
  const startDate = new Date('03/31/2012')
  const endDate = new Date()
  const diff = new Date(
    endDate.getTime() - startDate.getTime() - 86000 * 2 * 1000
  )
  const years = diff.getUTCFullYear() - 1970
  const months = diff.getUTCMonth()
  const days = diff.getUTCDate() - 1

  return (
    <div className="counters-container">
      <div className="text-container">
        <div className="number">{years}</div>
        <div className="text">років</div>
      </div>

      <div className="separator"></div>

      <div className="text-container">
        <div className="number">{months}</div>
        <div className="text">місяців</div>
      </div>

      <div className="separator"></div>

      <div className="text-container">
        <div className="number">{days}</div>
        <div className="text">день</div>
      </div>
    </div>
  )
}
