import baseURL from "../Api/baseURL";


// const useDeleteData = async (url,params) => {
//     const config = {
//         headers : {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//         }
//     }
    
//     const res = await baseURL.delete(url,params,config);
//     return res.data
// }

const useDeleteData = async (url, params = null) => {
  const res = await baseURL.delete(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    data: params // ← إذا تحتاج ترسل بيانات مع DELETE
  });

  return res.data;
}




export default useDeleteData