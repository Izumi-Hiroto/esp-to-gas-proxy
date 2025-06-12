export default async function handler(req, res) {
  const msg = req.query.msg || 'no message';

  try {
    const url = `https://script.google.com/macros/s/AKfycbyDMMRm-VD_Qn7fQQYcUyY_t2W0pajmZKmV-QN5uRKklUfEyIoDsO_56ewe8SmhDHjs3w/exec?msg=${encodeURIComponent(msg)}`;
    
    const response = await fetch(url); // Å© node-fetch ÇégÇÌÇ∏ÅAïWèÄ fetch

    if (!response.ok) {
      return res.status(response.status).send('Error from GAS');
    }

    const text = await response.text();
    res.status(200).send(text);
  } catch (error) {
    res.status(500).send('Fetch error: ' + error.message);
  }
}
