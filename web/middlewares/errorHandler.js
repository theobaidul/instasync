export default function errorHandler(err, _req, res, next) {
    return res.status(err?.statusCode || 500).json(err?.error);
}
