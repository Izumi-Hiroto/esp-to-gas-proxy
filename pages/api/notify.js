export default async function handler(req, res) {
  const msg = req.query.msg || "no message";
  const gasUrl = "https://script.google.com/macros/s/AKfycbyDMMRm-VD_Qn7fQQYcUyY_t2W0pajmZKmV-QN5uRKklUfEyIoDsO_56ewe8SmhDHjs3w/exec";
  const targetUrl = `${gasUrl}?msg=${encodeURIComponent(msg)}`;

  try {
    const response = await fetch(targetUrl);
    const text = await response.text();
    res.status(200).send(text);
  } catch (error) {
    res.status(500).send("GAS呼び出し失敗: " + error.toString());
  }
}
