import compression from "compression";
import zlib from "zlib";

const compressionMiddleware = compression({
  filter: (req, res) => {
    return res.getHeader("Content-Type") === "application/json";
    // if (req.path.startsWith("/no-comprimir")) {
    //   return false;
    // }
    // return compression.filter(req, res);
  },
  level: zlib.constants.Z_BEST_COMPRESSION,
  threshold: 1024, // 1kb
});

export default compressionMiddleware;
