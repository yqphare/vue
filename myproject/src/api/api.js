import service from "../service";

export function getData(parmas) {
  return service({
    url: 'person',
    method: 'get',
    params: parmas
  })
}
export function login(parmas) {
  return service({
    url: 'login',
    method: 'get',
    params: parmas
  })
}
// 分页查询数据
export function getInfor(parmas,apiName) {
   return service({
    url: apiName == 'getInfor' ? 'login' :'person',
    method: 'get',
    params: parmas
  })
}