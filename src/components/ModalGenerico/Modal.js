
const ModalCustomer = ({ children, isOpen, closeModal, size }) => {
  const handleModalClick = (e) => {
    e.stopPropagation()
  }
  // console.log(size)
  const modalSize = (size) => {
    if (size === 'small') {
      return 'w-80 p-0 shadow-none'
    }
    if (size === 'medium') {
      return 'w-128 p-0 shadow-none'
    }
  }

  return (
    <article className={`modal ${isOpen && 'isOpen'} `} onClick={closeModal}>
      <div
        className={`modalContainer  shadow-lg rounded  ${modalSize(size)}`}
        onClick={handleModalClick}
      >
        {!size && (
          <button
            className="modalClose bg-primary text-white   w-10 h-10 rounded-full text-3xl font-bold"
            onClick={closeModal}
          >
            X
          </button>
        )}
        {children}
      </div>
    </article>
  )
}

export default ModalCustomer
