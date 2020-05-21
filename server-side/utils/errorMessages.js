exports.notFound = ((data) => {
  return (
    {
      status: 404, 
      message: `${data} not found.`
    }
  );
})

exports.badRequest = (() => {
  return (
    {
      status: 400, 
      message: `Bad request.`
    }
  );
})