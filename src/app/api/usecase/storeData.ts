import axios from "axios";

export type createResponse = {
  Id: number;
};

interface Record {
  name: string;
  email: string;
  phone: number;
}
export default async function sendData(
  name: string,
  email: string,
  phone: number,
): Promise<createResponse[]> {
  const options = {
    method: "POST",
    url: "https://nocodb.noblespace.pro/api/v2/tables/m9zk3yvnsdpv51n/records",
    headers: {
      "xc-token": "ughLyNRN5dQOoSQYWu_zXDfsc3kZ6ENOIAtYl9jL",
      "Content-Type": "application/json",
    },
    body: [{
      name: name,
      email: email,
      phone: phone,
    }],
  };
  const records: Record[] = [
    {
      name: name,
      email: email,
      phone: phone,
    },
  ];
  const response = await axios.post('https://nocodb.noblespace.pro/api/v2/tables/m9zk3yvnsdpv51n/records', records, {
    headers: {
      'xc-token': 'ughLyNRN5dQOoSQYWu_zXDfsc3kZ6ENOIAtYl9jL',
      'Content-Type': 'application/json',
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return [{ Id: response.data.Id }];
}
