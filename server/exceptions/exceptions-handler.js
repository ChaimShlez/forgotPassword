
let exceptionHandler = (e, request, response, next) => {
  // e = my Server error --> IT HAS AN ENUM INSIDE (!!) called errorType
  if (e.errorType != undefined) {

      if (e.errorType.isShowStackTrace) {
          console.error(e);
      }
      response.status(e.errorType.httpCode).json({ error: e.errorType.message });
        return

  }
  if(e.name === 'UnauthorizedError'){
      response.status(401).json({ error: e.inner.message});
        return

  }

  // This is most definitely a bug (not a ServerError) and so we want the log
  // Reaching here means that we got an UNEXPECTED BUG which we didn't wrap with a ServerError
  console.error(e);
  response.status(600).json({ error: "General error" });
}

module.exports = exceptionHandler;