const getRequestData = (req) => ({
  method: req.method,
  path: req.path,
  headers: req.headers,
  host: req.hostname,
  baseUrl: req.baseUrl,
  ip: req.ip,
  message: `Handling ${req.method} request`,
});

const getRoot = async (req, res, next) => {
  res.json(getRequestData(req));
};

export const rootController = {
  getRoot,
};
