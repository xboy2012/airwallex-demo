import axios from 'axios';

// const delay = (t: number) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, t);
//     });
// };

export const submit = async (data: { fullName: string; email: string }) => {
  // await delay(3000);
  await axios.request({
    url: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    method: 'POST',
    data: {
      name: data.fullName,
      email: data.email,
    },
    withCredentials: true,
  });
};
