import PropTypes from 'prop-types';
import SubscriberRow from "../SubscriberRow"

const SubscriberTable = (props) => {
  const { subscribers, openSubscriberStatus } = props

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subscribers.map((subscriber) => (
                  <SubscriberRow subscriber={subscriber} openSubscriberStatus={openSubscriberStatus}
                     key={subscriber?.id}>

                  </SubscriberRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

SubscriberTable.propTypes = {
  subscribers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string
    })
  ),
  openSubscriberStatus: PropTypes.func,
}

SubscriberTable.defaultProps = {
  subscribers: [],
  openSubscriberStatus: () => {},
}

export default SubscriberTable
