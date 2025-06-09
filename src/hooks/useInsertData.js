import baseURL from "../Api/baseURL";

const useInsertData = async (url, params) => {
    const config = {
        headers : {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.post(url, params,config)
    // console.log(res)
    return res;
}

const useInsertDataWithImage = async (url,params) => {
    const config = {
        headers:{
            "content-type":"multipart/form-data",
             Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseURL.post(url,params,config)
    return res
}
export { useInsertData,useInsertDataWithImage};