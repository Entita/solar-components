function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Objevil se error ${statusCode} na serveru.`
        : 'Objevil se error u klienta.'}
    </p>
  )
}
 
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
 
export default Error