import { useState } from "react";
import Modal, { ModalBody, ModalFooter } from '../Modal'
import PropTypes from 'prop-types';

// Components
import Button, { SecondaryButton } from '../Button';

// Services
import { updateSubscriber } from "../../services/subscriber";

const SubscriberStatusModal = (props) => {
  const { isOpen, onSuccess, onClose, subscriber } = props;
  const [isDeleting, setIsDeleting] = useState(false)
  const status = subscriber?.status

  const onUpdate = () => {
    const newStatus = status === 'active' ? 'inactive' : 'active'
    const payload = {
      status: newStatus
    }

    setIsDeleting(true)
    updateSubscriber(subscriber.id, payload)
    .then(() => {
      subscriber.status = newStatus
      onSuccess()
    })
    .catch((payload) => {
      const error = payload?.response?.data?.message || 'Something went wrong'
      console.error(error)
    })
    .finally(() => {
      setIsDeleting(false)
    })
  }

  const modalTitleText = status === 'active' ? 
    "Unsubscribe" : "Resubscribe"
  const messageBodyText = status === 'active' ? 
    "Are you sure you'd like to unsubscribe this subscriber?" :
    "Are you sure you'd like to resubscribe this subscriber?"
  const buttonText = status === 'active' ? 
    "Unsubscribe" : "Resubscribe"

  return (
    <Modal modalTitle={modalTitleText} showModal={isOpen} onCloseModal={onClose}>
      <>
        <ModalBody>
          {messageBodyText}
        </ModalBody>
        <ModalFooter>
          <SecondaryButton
            className="mx-2"
            onClick={onClose}
          >
            Cancel
          </SecondaryButton>
          <Button
            type="primary"
            loading={isDeleting}
            onClick={onUpdate}
          >
            {buttonText}
          </Button>
        </ModalFooter>
      </>
    </Modal>
  );
};

SubscriberStatusModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
  subscriber: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

SubscriberStatusModal.defaultProps = {
  subscriber: {}
}

export default SubscriberStatusModal;
