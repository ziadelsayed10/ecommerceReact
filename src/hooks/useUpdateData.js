import baseURL from "../Api/baseURL";

const useUpdateData = async (url, params) => {
    const config = {
        headers : {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.put(url, params,config)
    return res;
}

const useUpdateDataWithImage = async (url,params) => {
    const config = {headers:{"content-type":"multipart/form-data",  Authorization: `Bearer ${localStorage.getItem("token")}`}}
    const res = await baseURL.put(url,params,config)
    return res
}
export { useUpdateData,useUpdateDataWithImage};