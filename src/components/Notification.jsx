const Notification = ({ status, message }) => {
    if(message === null) return null

    return (
        <div className={`${ status === 'success' ? 'success' : 'error' }`}>
            { message }
        </div>
    )
}

export default Notification