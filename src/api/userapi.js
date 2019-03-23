import axios from 'axios'

//是否登入接口
export const login = ({ uName, pwd}) => {
  return axios.request({
    url:'/api/Account/Login',
    method: 'post',
    params: {
      uName,
      pwd
    },// post 使用parmas传参数
    /* data: {
      //get 使用data传参数
    } */
  })
}
