import StatusPill from "../StatusPill"
import PropTypes from 'prop-types';

const SubscriberRow = (props) => {
  const { subscriber, openSubscriberStatus } = props

  const onClickSubscriberStatus = () => {
    openSubscriberStatus(subscriber)
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{subscriber?.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">{subscriber?.email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusPill value={subscriber.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-primary-gold-600 hover:text-primary-gold-900 underline"
          onClick={onClickSubscriberStatus}>
          {subscriber.status === 'active' ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </td>
    </tr>
  )
}

SubscriberRow.propTypes = {
  subscriber: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string
  }),
  openSubscriberStatus: PropTypes.func,
}

SubscriberRow.defaultProps = {
  subscribers: [],
  openSubscriberStatus: () => {},
}

export default SubscriberRow
