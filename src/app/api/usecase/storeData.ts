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
  const records: Record[] = [
    {
      name: name,
      email: email,
      phone: phone,
    },
  ];
  const response = await axios.post(
    "https://nocodb.noblespace.pro/api/v2/tables/m9zk3yvnsdpv51n/records",
    records,
    {
      headers: {
        "xc-token": process.env.NEXT_PUBLIC_NOCODBKEY,
        "Content-Type": "application/json",
      },
    },
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return [{ Id: response.data.Id }];
}
