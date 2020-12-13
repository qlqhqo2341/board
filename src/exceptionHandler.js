const generateHandler = (msg, error_code, req, res) => {
  return (err) => {
    console.error(`error with ${req.url}`, msg, err);
    res.status(error_code).send({
      message: msg,
      err: err,
    });
  };
};

export { generateHandler };
