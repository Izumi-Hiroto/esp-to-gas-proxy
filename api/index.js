export default function handler(req, res) {
  const msg = req.query.msg || "No message";

  const url = `https://script.google.com/macros/s/AKfycbyDMMRm-VD_Qn7fQQYcUyY_t2W0pajmZKmV-QN5uRKklUfEyIoDsO_56ewe8SmhDHjs3w/exec?msg=${encodeURIComponent(msg)}`;

  res.writeHead(302, { Location: url });
  res.end();
}